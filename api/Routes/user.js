const { Permissions } = require("discord.js");
const client = require("../../");
const api = require("express").Router();

api.get("/", async (req, res) => {
  res.send(client.guilds.cache);
});

module.exports = api;
