import express from "express";
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
import paymentRouter from "./routes/paymentRoutes.js";
import transportsRoutes from "./routes/transportsRoutes.js";
import redis from "redis";
import { Server } from "socket.io";

app.use(express.json());

//routes
app.use("/api/auth", upload.single("profileImage"), authRouter);
app.use("/api/users", usersRouter);
app.use("/api/friends", friendsRouter);
app.use("/api/posts", postsRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/chats", chatsRouter);
app.use("/api/events", eventRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/transports", transportsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Bark Mate!");
  res.send(imageTag);
});

const port = process.env.port || 8080;

const APPID = process.env.APPID;

//open web socket upon server spin up
// export const wss = new WebSocket.WebSocketServer({ server });
const clients = {};

//migrate to socket.io instance
const io = new Server(server, {
  cors: {
    origin: "*",
  },
  allowEIO3: true,
  transports: ["websocket"],
});

// io.listen(4000);
// io.listen(8080);

io.on("connection", (socket) => {
  console.log("socket is open", socket.handshake.query.userId);
  const userId = socket.handshake.query.userId;
  clients[userId] = socket;

  socket.on("error", (e) => {
    console.log("a socket error occured: ", e);
  });

  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });

  socket.on("message", (msg) => {
    console.log("server socketr caught a message", msg);
    publisher.publish("commCenter", JSON.stringify(msg));
  });
});

//during development
const subscriber = redis.createClient();
const publisher = redis.createClient();

// const subscriber = redis.createClient({
//   url: "redis://rds:6379",
// });

// const publisher = redis.createClient({
//   url: "redis://rds:6379",
// });

await publisher.connect();
await subscriber.connect();
console.log("connected to redis client");

subscriber.subscribe("commCenter", (data, channel) => {
  console.log("got the ", data, "from", channel);
  const parsedData = JSON.parse(data);

  switch (parsedData.type) {
    case "test":
      {
        clients[parsedData.content.userId] &&
          io
            .to(clients[parsedData.content.userId].id)
            .emit("message", parsedData);
      }
      break;
    case "notification":
      {
        clients[parsedData.content.recipient] &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
      }
      break;
    case "markNotificationsRead":
      //mark recipient of notification as read
      {
        clients[parsedData.content.recipient] &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
        console.log("sent to client");
      }
      break;
    case "markNotificationViewed":
      {
        clients[parsedData.content.userId] &&
          io
            .to(clients[parsedData.content.userId].id)
            .emit("message", parsedData);
      }
      break;
    case "chat":
      {
        const messageSender = clients[parsedData.content.message.sender];
        const messageRecipient = clients[parsedData.content.message.recipient];

        messageRecipient &&
          io.to(messageRecipient.id).emit("message", parsedData);
        messageSender && io.to(messageSender.id).emit("message", parsedData);
      }
      break;
    case "friendRequest":
      //send both requester and recipient of request data
      {
        clients[parsedData.content.requester] &&
          io
            .to(clients[parsedData.content.requester].id)
            .emit("message", parsedData);
        clients[parsedData.content.recipient] &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
      }
      break;
    case "editPost":
      {
        io.emit("message", parsedData);
      }
      break;
    case "createComment":
      {
        io.emit("message", parsedData);
      }
      break;
    default: {
      break;
    }
  }
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
