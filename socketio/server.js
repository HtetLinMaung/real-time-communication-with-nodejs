const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`Received: ${message}`);
    socket.broadcast.emit("message", `You sent: ${message}`);
  });
});

server.listen(8080);
