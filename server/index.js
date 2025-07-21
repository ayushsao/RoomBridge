import dotenv from 'dotenv';
import { connectDB } from './db.js';
import app from './app.js';

dotenv.config();


const PORT = process.env.PORT || 8000;

connectDB();

// const token="6637473201:AAG6H4SMtFQuKbCVhKImOSf2QQT_QblvvyU"

// const web_link="https://roombridge.vercel.app"
// const bot = new Telegraf(token)

// bot.start((ctx) => ctx.reply('Welcome to RoomBridge',{reply_markup:{keyboard:[[{text:"web app",web_app:{url:web_link}}]]}}))

// bot.launch()

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
