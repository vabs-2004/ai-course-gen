import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(import.meta.env.VITE_PUBLIC_DB_CONNECTION_STRING);
export const db = {
    query: async (query) => {
        console.log("Executing query:", query);
        const response = await fetch('http://localhost:5000/proxy', { // Proxy server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the database');
        }
        return response.json();
    },
};


