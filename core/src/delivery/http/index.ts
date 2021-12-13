import express from "express";
import starsRoutes from "./stars";

const app = (express.Application = express());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));

app.use("/api/stars", starsRoutes);

export default app;
