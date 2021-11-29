const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "redeem",
  description: "To redeem your code",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["red"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    console.log("args", args);
    console.log("GuildDB", GuildDB);
    console.log("message", message);
    console.log("client", client);
    GuildDB.expire = Date.now() + 15000;
    console.log(await client.database.guild.set(message.guild.id, GuildDB));
    return client.sendTime(
      message.channel,
      "✅ | **6 aylık Kodunuz aktive edilmiştir **"
    );
  },
};
