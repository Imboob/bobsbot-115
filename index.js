const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

const welcomeChannelId = "997125565100347453"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Welcome to the server <3!`,
        files: [img]
    })
})

let bot = {
    client,
    prefix: "n.",
    owners: ["357165458132303873"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)

client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadCommands = (bot, reload) => require ("./commands/ping")

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(process.env.TOKEN)