const userId = JSON.parse(localStorage.getItem("user"))._id;

// const openWebSocket = async () => {
//   return new Promise(function (resolve, reject) {
//     const ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`);

//     ws.addEventListener("open", () => {
//       resolve(ws);
//     });

//     ws.addEventListener("error", (err) => {
//       reject(err);
//     });
//   });
// };

// const openWebSocket = () => {
//   const ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`)();
//   return ws;
// };

// export { openWebSocket };
