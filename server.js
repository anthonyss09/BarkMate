import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRouter from "./routes/authRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import upload from "./utils/fileUpload.js";

app.use(express.json());

//routes
app.use("/api/auth", upload.single("profileImage"), authRouter);
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Bark Mate!");
});

const port = process.env.port || 8080;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
