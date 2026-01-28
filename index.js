const TelegramBot = require('node-telegram-bot-api');

// Your bot token
const token = '8085914536:AAGeWekmk1XIOW-GOmBY-FySCg2v3uuyFqk';

// Create the bot
const bot = new TelegramBot(token, { polling: true });

// Respond to any message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  bot.sendMessage(chatId, `You said: ${text}`);
});

console.log("ClawDBot is running on Telegram...");

