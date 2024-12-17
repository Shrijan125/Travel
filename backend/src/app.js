import express from "express";
import cors from "cors";
import apiV1Router from "./routes/route.js";

const app = express();

console.log("CORS_ORIGIN", process.env.CORS_ORIGIN);

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api/v1", apiV1Router);

export { app };
