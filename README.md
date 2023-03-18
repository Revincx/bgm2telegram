# bgm2telegram

将 Bangumi 的用户收藏时间线推送到 Telegram 频道

### 效果预览

![效果预览图](https://user-images.githubusercontent.com/25524750/226095791-5a45f264-b3e4-48eb-9f87-c23fd53ff29e.png)

### 使用方法

基于 [Bangumi APP](https://github.com/czy0729/Bangumi) 的 [WebHook](https://www.yuque.com/chenzhenyu-k0epm/znygb4/kfpfze0u7old4en1?singleDoc) 功能运行，仅限在 APP 内的操作才能推送。

请下载版本号不小于 7.10.0 的 Bagumi APP 并在 `设置 / 其他 / Webhook` 页面中配置部署后的 Vercel 地址。

地址格式：`https://<域名>/api/apphook`

使用 Telegram 的 [@BotFather](https://t.me/BotFather) 机器人自助创建 Bot 帐号，然后将 Bot 添加为要推送频道的管理员并给予发送消息权限。

### 环境变量

| 名称         | 必填 | 示例                            | 说明                                          |
| ------------ | ---- | ------------------------------- | --------------------------------------------- |
| BOT_TOKEN    | 是   | `12345678:ASDFGHJKSHWEUW`       | Telegram 机器人的 Bot Token。                 |
| PUSH_CHANNEL | 是   | `@username` 或 `-1001234566778` | 要推送到的频道，支持 username 格式和 ID 格式  |
| NICKNAME     | 否   | `Revincx`                       | 你的昵称，不填写会默认使用 Bangumi 账户的昵称 |

### 一键部署

点击下方的按钮即可一键部署到 Vercel。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRevincx%2Fbgm2telegram&env=BOT_TOKEN,PUSH_CHANNEL)

---

参见 Issue：[Bangumi #88](https://github.com/czy0729/Bangumi/issues/88)

