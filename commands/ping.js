module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    dev0nly: false,
    run: async ({client, message, args}) => {
        message.reply("Pong")
    }
}