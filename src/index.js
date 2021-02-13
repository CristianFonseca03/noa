const {Client, MessageAttachment} = require("discord.js");
const config = require("./config.json");
const {createIcons, createIconsFromNumber} = require("./createIcons")

const prefix = "~";

const client = new Client();


client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase()
    switch (command) {
        case 'ping':
            await message.reply('Pong!');
            break;
        case 'test-1':
            let file;
            if (args[0] !== undefined) {
                file = await createIcons.createIcons(args[0])
            } else {
                file = await createIcons.createIcons('none')
            }
            const createdImage = new MessageAttachment(file)
            await message.reply(createdImage)
            break
        case 'test-2':
            const files = await createIconsFromNumber(args[0] ? args[0] : 10)
            files.map(async (file) => {
                const attachment = new MessageAttachment(file)
                await message.reply(attachment)
            })
            break
        default:
            const attachment = new MessageAttachment('./src/noaOwO.jpg')
            await message.reply(attachment)
            break
    }
})

client.login(config.BOT_TOKEN);
