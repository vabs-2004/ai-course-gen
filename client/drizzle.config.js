/** @type {import("drizzle-kit").Config} */
export default{
    schema: "./src/configs/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.VITE_PUBLIC_DB_CONNECTION_STRING,
    }
};