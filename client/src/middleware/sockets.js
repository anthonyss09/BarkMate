// const socketsMiddleware = (storeAPI) => (next) => (action) => {
//   const userId = storeAPI.getState().auth.currentUser._id;

//   if (action.type == "notifications/socketsConnect") {
//     const ws = new WebSocket(`ws://192.168.1.153:8080/${userId}`);
//     console.log("notify me bitch");
//     ws.addEventListener("open", (e) => {
//       console.log(e);
//     });
//     ws.addEventListener("message", (e) => {
//       console.log(e);
//     });
//   }
//   return next(action);
// };

// export default socketsMiddleware;
