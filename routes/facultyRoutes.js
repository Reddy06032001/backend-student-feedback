const express = require("express");
const Faculty = require("../models/Faculty");

const router = express.Router();

// ✅ Create Faculty
router.post("/", async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Get All Faculties
router.get("/", async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json(faculties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Update Faculty
router.put("/:id", async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(faculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Delete Faculty
router.delete("/:id", async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Faculty Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
