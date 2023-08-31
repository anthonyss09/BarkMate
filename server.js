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
import eventRouter from "./routes/eventRoutes.js";
import { v4 as uuidv4 } from "uuid";

app.use(express.json());

//routes
app.use("/api/auth", upload.single("profileImage"), authRouter);
app.use("/api/users", usersRouter);
app.use("/api/friends", friendsRouter);
app.use(
  "/api/posts",
  upload.single("postImage"),

  postsRouter
);
app.use("/api/notifications", notificationsRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/events", eventRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Bark Mate!");
});

const port = process.env.port || 8080;

//open web socket upon server spin up
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

  //create user session reference in clients object with property of userId;
  clients[userId] = ws;
  console.log(`${userId} connected`);
  clients[userId].send(
    JSON.stringify({ type: "data", content: { message: "welcome" } })
  );

  //web socket listening for message events from client
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
          //if notification type friend request, send data to both sender and recipient
          if (parsedData.content.notificationType === "friendRequest") {
            clients[parsedData.content.sender].send(data);
          }
          clients[parsedData.content.recipient] &&
            clients[parsedData.content.recipient].send(data);
          console.log("sent to client");
        }
        break;
      case "markNotificationsRead":
        //mark recipient of notification as read
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
        //update and target only participants of chat ****
        {
          // Object.values(clients).map((client) => client.send(data));
          clients[parsedData.content.message.recipient].send(data);
          clients[parsedData.content.message.sender].send(data);
        }
        break;
      case "friendRequest":
        //send both requester and recipient of request data
        {
          console.log(parsedData);
          console.log(parsedData.content.requester);

          clients[parsedData.content.requester] &&
            clients[parsedData.content.requester].send(data);
          clients[parsedData.content.recipient] &&
            clients[parsedData.content.recipient].send(data);
        }
        break;
      case "editPost":
        {
          console.log("editing post in server socket");
          console.log(parsedData);
          Object.values(clients).map((client) => {
            client.send(data);
          });
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
