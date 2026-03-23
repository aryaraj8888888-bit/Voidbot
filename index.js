const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

// 🔥 YAHAN APNA BOT TOKEN DAAL
const TOKEN = "MTQ4NTUwODIzMjg2Nzg3Njk3NA.GXIJIs.GgAT9_60M-

PNoh3xCvFRFzmWJAezTtNzfUu5Lc";

// ===== Express Web Server (24/7 online) =====
const app = express();
app.get("/", (req, res) => {
  res.send("VoidCore™ Bot is running 💀");
});
app.listen(3000, () => console.log("Web server ready"));

// ===== Discord Bot Client =====
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ===== Ready Event =====
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// ===== Login Bot =====
client.login(TOKEN);
