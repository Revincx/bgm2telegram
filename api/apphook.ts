import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { WebHookCollection } from "../types/WebhookCollection";
import { pushMessage } from "../utils/bot";
import env from "../utils/env";
import { genFullMessage } from "../utils/text";

export default async function (req: VercelRequest, res: VercelResponse) {
  let webhook_body = req.body as WebHookCollection;

  if (req.method != "POST") {
    return res.status(405).send({
      ok: false,
      message: "Only accept POST request.",
    })
  }

  if(req.query.key != env.AUTH_KEY) {
    return res.status(401).send({
      ok: false,
      message: "Request Unauthorized."
    })
  }

  if (webhook_body.type != "collection") {
    return res.send({
      ok: true,
      pushed: false,
      message: "Only accept collection webhook for now.",
    });
  }

  try {
    let message = await pushMessage(genFullMessage(webhook_body));

    if (message.message_id) {
      return res.send({
        ok: true,
        pushed: true,
      });
    }
  } catch (err) {
    return res.send({
      ok: true,
      pushed: false,
      message: "Push failed: " + err,
    });
  }
}
