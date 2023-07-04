import express from "express";
import * as WebSocket from "ws";
import * as http from "http";
const app = express();
const server = http.createServer(app);
import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRouter from "./routes/authRoutes.js";
import usersRouter from "./routes/usersRoutes.js";
import friendsRouter from "./routes/friendsRoutes.js";
import upload from "./utils/fileUpload.js";
import postsRouter from "./routes/postsRoutes.js";
import notificationsRouter from "./routes/notificationRoutes.js";
import { v4 as uuidv4 } from "uuid";

app.use(express.json());

//routes
app.use("/api/auth", upload.single("profileImage"), authRouter);
app.use("/api/users", usersRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/posts", upload.single("postImage"), postsRouter);
app.use("/api/notifications", notificationsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Bark Mate!");
});

const port = process.env.port || 8080;

export const wss = new WebSocket.WebSocketServer({ server });
const clients = {};

wss.on("connection", (ws) => {
  const userId = uuidv4();
  ws.on("error", (error) => {
    console.log(error);
  });
  console.log("recieved new connection");

  clients[userId] = ws;

  console.log(`${userId} connected`);

  ws.on("message", (data) => {
    console.log("message is");
    data = data.toString();
    console.log(data);
    for (let userId in clients) {
      let client = clients[userId];
      client.send(data);
    }
  });
});

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    server.listen(port, () => {
      console.log(`App is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
