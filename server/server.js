import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import pkg from 'pg';
import e from 'cors';

dotenv.config();
const { Pool } = pkg;

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader(
//         "Content-Security-Policy",
//         "default-src 'self'; img-src 'self' http://localhost:5173; script-src 'self' 'unsafe-inline';"
//     );
//     next();
// });

const pool = new Pool({
    connectionString: process.env.VITE_PUBLIC_DB_CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false, // Required for Neon databases
    },
});

app.post('/proxy', async (req, res) => {
    console.log("Received query:", req.body.query); // Log the query
    const { query } = req.body;

    if (!query) {
        console.error("No query provided in the request.");
        return res.status(400).send('Query is required');
    }

    try {
        const result = await pool.query(query); // Execute the query using the pool
        console.log("Query result:", result.rows); // Log the query result
        res.json(result.rows); // Send the query result back to the client
    } catch (error) {
        console.error("Error executing query:", error.message); // Log the error message
        console.error("Stack trace:", error.stack); // Log the stack trace for debugging
        res.status(500).send('Error executing query');
    }
});
app.get('/youtube', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        console.error("No query provided for YouTube API.");
        return res.status(400).send('Query parameter is required');
    }

    try {
        const params = {
            part: 'snippet',
            q: query,
            maxResults: 1,
            type: 'video',
            key: process.env.VITE_YOUTUBE_KEY, // Use the YouTube API key from the .env file
        };

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', { params });
        console.log("YouTube API response:", response.data.items); // Log the response
        res.json(response.data.items); // Send the YouTube API response back to the client
    } catch (error) {
        console.error("Error fetching YouTube videos:", error.message); // Log the error message
        console.error("Stack trace:", error.stack); // Log the stack trace for debugging
        res.status(500).send('Error fetching YouTube videos');
    }
});
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});