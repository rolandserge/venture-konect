import express from "express"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import http from "http";
import dotenv from "dotenv"
import contactRoute from "./routes/contact.route.js"
import projectRoute from "./routes/project.route.js"
// import { connectDB } from "./lib/db.js";

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

// Config
app.use(morgan("dev"))
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
);

// routes
app.use('/api/contact', contactRoute)
app.use("/api/project", projectRoute)

const server = http.createServer(app)
// create server

// connectDB()

server.listen(PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);
    // connectDb();
});
