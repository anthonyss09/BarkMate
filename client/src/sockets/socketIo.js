import { io } from "socket.io-client";
const user = JSON.parse(localStorage.getItem("user"));
// let userId = user ? user._id : null;

export let socket = io({
  path: "/socket.io/",
  auth: { token: "token" },
  query: { userId: user ? JSON.parse(localStorage.getItem("user"))._id : "" },
  autoConnect: false,
  transports: ["websocket", "polling"],
  withCredentials: true,
});

socket.onAnyOutgoing((e, m) => {
  // console.log("any out going", e, m);
});

socket.on("connect", () => {
  // console.log("socket has connected");
  socket.emit("message", {
    type: "test",
    content: {
      msg: "test message",
      userId: JSON.parse(localStorage.getItem("user"))._id,
    },
  });
});

socket.on("message", (msg) => {
  // console.log("client recieved the message", msg);
});

socket.io.on("reconnect", (attempt) => {
  // console.log("socket reconnection success");
});
