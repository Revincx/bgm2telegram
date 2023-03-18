import * as env from 'env-var'

export default {
    BOT_TOKEN: env.get('BOT_TOKEN').required().asString(),
    PUSH_CHANNEL: env.get('PUSH_CHANNEL').required().asString(),
    NICKNAME: env.get('NICKNAME').asString()
}