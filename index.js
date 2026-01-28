const TelegramBot = require('node-telegram-bot-api');

// Your bot token
const token = '8085914536:AAGeWekmk1XIOW-GOmBY-FySCg2v3uuyFqk';

// Create the bot
const bot = new TelegramBot(token, { polling: true });

// Replace with your Telegram user ID
const chatId = 6381593006;

// Send a message to yourself when bot starts
bot.sendMessage(chatId, "ClawDBot is online! ✅");

// Respond to any message sent to the bot
bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
});

// Handle errors
bot.on('polling_error', (err) => console.error(err));

console.log("ClawDBot is running on Telegram...");



