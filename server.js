import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/auth.js";
import UsersRoutes from "./routes/users.js";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", AuthRoutes);
app.use("/api/v1", UsersRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome express");
});

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
