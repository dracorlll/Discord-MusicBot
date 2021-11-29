const Express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const Logger = require("./structures/Logger");
const DiscordMusicBot = require("./structures/DiscordMusicBot");
const botconfig = require("./botconfig");
const client = new DiscordMusicBot();

//Web Stuff
const app = Express();
const server = http.createServer(app);

server.listen(process.env.PORT || botconfig.Port, () =>
  console.log("Web Server has been started")
);

client.build();

app.use("/", require("./api"));
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
require("./api/socket")(io);

module.exports = client; //;-;
