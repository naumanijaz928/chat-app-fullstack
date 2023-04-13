import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use("/api/v1", AuthRoutes);
app.get("/", (req, res) => {
  res.status(200).send("Welcome express");
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
