const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { Pool } = require("pg")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// Middleware
app.use(cors())
app.use(express.json()) // To parse JSON requests

// PostgreSQL Connection

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})


// Define a POST route for "/jobs"
app.post("/jobs", async (req, res) => {
    try {
        const { first_name, last_name, cohort, title, company } = req.body;
        const applied_date = new Date();

        const result = await pool.query(
            "INSERT INTO jobs (first_name, last_name, cohort, title, company, applied_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [first_name, last_name, cohort, title, company, applied_date]
        );

        res.status(201).json({ message: "Job application added!", job: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});




// Test Route
app.get("/", (req, res) => {
    res.send("Job Tracker API is running...")
})



// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})