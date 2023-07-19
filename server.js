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
import chatsRouter from "./routes/chatsRoutes.js";
import { v4 as uuidv4 } from "uuid";

app.use(express.json());

//routes
app.use("/api/auth", upload.single("profileImage"), authRouter);
app.use("/api/users", usersRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/posts", upload.single("postImage"), postsRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/chats", chatsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Bark Mate!");
});

const port = process.env.port || 8080;

export const wss = new WebSocket.WebSocketServer({ server });
const clients = {};

wss.on("connection", (ws, req) => {
  const sessionId = uuidv4();
  ws.on("error", (error) => {
    console.log(error);
  });

  console.log("recieved new connection");
  const userId = req.url.slice(1);
  console.log(userId);

  // figure out way to reference recipient id in clients
  //prevent overwriting client in the case of unanticipated rerenders client side
  // if (!Object.keys(clients).includes(userId)) {
  //   clients[userId] = ws;
  //   console.log(`${userId} connected`);
  // }
  clients[userId] = ws;
  console.log(`${userId} connected`);
  clients[userId].send(
    JSON.stringify({ type: "data", content: { message: "welcome" } })
  );

  // if (Object.keys(clients).includes(userId)) {
  //   console.log("client exists");
  //   console.log(clients[userId][sessionId]);
  //   clients[userId][sessionId] = ws;
  // } else {
  //   clients[userId] = {
  //     [sessionId]: ws,
  //   };
  // }

  // clients[userId][sessionId].send(
  //   JSON.stringify({ type: "data", content: { userId, sessionId } })
  // );

  ws.on("message", (data) => {
    console.log("message is");
    data = data.toString();
    const parsedData = JSON.parse(data);
    switch (parsedData.type) {
      case "data":
        {
          console.log(parsedData);
        }
        break;
      case "notification":
        {
          console.log(parsedData);
          if (parsedData.content.notificationType === "friendRequest") {
            clients[parsedData.content.sender].send(data);
          }
          clients[parsedData.content.recipient] &&
            clients[parsedData.content.recipient].send(data);
          console.log("sent to client");
        }
        break;
      case "markNotificationsRead":
        {
          clients[parsedData.content.recipient].send(data);
        }
        break;
      case "markNotificationViewed":
        {
          clients[parsedData.content.userId].send(data);
        }
        break;
      case "chat":
        {
          Object.values(clients).map((client) => client.send(data));
        }
        break;
      case "friendRequest":
        {
          console.log(parsedData);
          console.log(parsedData.content.requester);
          clients[parsedData.content.requester].send(data);
          clients[parsedData.content.recipient] &&
            clients[parsedData.content.recipient].send(data);
        }
        break;
      default: {
        break;
      }
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
