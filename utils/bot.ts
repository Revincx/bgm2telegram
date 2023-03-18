import { Bot } from "grammy"
import env from "./env"

const bot = new Bot(env.BOT_TOKEN)

export async function pushMessage(message: string) {
    let chat_id = Number.isNaN(parseInt(env.PUSH_CHANNEL)) ? env.PUSH_CHANNEL : parseInt(env.PUSH_CHANNEL)

    return await bot.api.sendMessage(chat_id, message, {
        parse_mode: 'HTML'
    })
}