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
});

// io.listen(4000);
io.listen(4000);

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

// const subscriber = redis.createClient({
//   socket: {
//     port: 6379,
//     host: "rds",
//   },
// });
// const publisher = redis.createClient({
//   socket: {
//     port: 6379,
//     host: "rds",
//   },
// });

const subscriber = redis.createClient();
const publisher = redis.createClient();

await publisher.connect();
await subscriber.connect();
console.log("connected to redis client");

subscriber.subscribe("commCenter", (data, channel) => {
  console.log("got the ", data, "from", channel);
  const parsedData = JSON.parse(data);

  switch (parsedData.type) {
    case "test":
      {
        // io.emit("message", data);
        // io.to(clients[parsedData.content.recipient], data);
        io.to(clients[parsedData.content.userId].id).emit(
          "message",
          parsedData
        );
      }
      break;
    case "notification":
      {
        // recipient && recipient.send(data);
        clients[parsedData.content.recipient].id &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
        // io.to(user).emit("message", parsedData);
        // console.log("sent to client");
      }
      break;
    case "markNotificationsRead":
      //mark recipient of notification as read
      {
        // recipient && recipient.send(data);
        clients[parsedData.content.recipient].id &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
        console.log("sent to client");
      }
      break;
    case "markNotificationViewed":
      {
        // user.send(data);
        clients[parsedData.content.userId].id &&
          io
            .to(clients[parsedData.content.userId].id)
            .emit("message", parsedData);
      }
      break;
    case "chat":
      {
        const messageSender = clients[parsedData.content.message.sender].id;
        const messageRecipient =
          clients[parsedData.content.message.recipient].id;

        // messageRecipient && messageRecipient.send(data);
        // messageSender && messageSender.send(data);

        messageRecipient && io.to(messageRecipient).emit("message", parsedData);
        messageSender && io.to(messageSender).emit("message", parsedData);
      }
      break;
    case "friendRequest":
      //send both requester and recipient of request data
      {
        // requester && requester.send(data);
        // recipient && recipient.send(data);
        clients[parsedData.content.requester].id &&
          io
            .to(clients[parsedData.content.requester].id)
            .emit("message", parsedData);
        clients[parsedData.content.recipient].id &&
          io
            .to(clients[parsedData.content.recipient].id)
            .emit("message", parsedData);
      }
      break;
    case "editPost":
      {
        // console.log("editing post in server socket");
        // console.log(parsedData);
        // Object.values(clients).map((client) => {
        //   client.send(data);
        // });

        io.emit("message", parsedData);
      }
      break;
    default: {
      break;
    }
  }
});

// wss.on("connection", (ws, req) => {
//   const sessionId = uuidv4();
//   ws.on("error", (error) => {
//     console.log("web socket error is", error);
//   });
//   ws.on("close", () => {
//     console.log("web socket closed");
//   });

//   console.log("recieved new connection");
//   const userId = req.url.slice(1);
//   console.log(userId);

//   //create user session reference in clients object with property of userId;
//   clients[userId] = ws;
//   console.log(`${userId} connected`);
//   clients[userId].send(
//     JSON.stringify({ type: "data", content: { message: "welcome" } })
//   );

//   //web socket listening for message events from client
//   ws.on("message", (data) => {
//     console.log("message is");
//     data = data.toString();
//     publisher.publish("commCenter", data);
//   });
// });

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
