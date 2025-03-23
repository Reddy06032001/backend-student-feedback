const axios = require("axios");
const fs = require("fs");

const API_URL = "https://backend-student-feedback.onrender.com/api/feedback";
const FILE_PATH = "test.json";

async function uploadData() {
  try {
    const facultyData = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

    for (const faculty of facultyData) {
      // Remove _id field if present
      delete faculty._id;

      try {
        const response = await axios.post(API_URL, faculty);
        console.log(`✅ Successfully added: ${faculty.name}`);
      } catch (error) {
        console.error(
          `❌ Failed to add: ${faculty.name}`,
          error.response?.data || error.message
        );
      }
    }
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

uploadData();
