const TelegramBot = require('node-telegram-bot-api');

// Your bot token
const token = '8085914536:AAGeWekmk1XIOW-GOmBY-FySCg2v3uuyFqk';

// Create the bot
const bot = new TelegramBot(token, { polling: true });

// <-- Put your user ID here
const chatId = 6381593006; // your Telegram ID
bot.sendMessage(chatId, "ClawDBot is online! ✅");

// Respond to any incoming message
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
});

console.log("ClawDBot is running on Telegram...");


