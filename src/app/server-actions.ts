"use server";
import {client} from "@/utils/twilio/client";


export default async function actions(formData: FormData) {
  const TEL = formData.get("tel");
  await client.calls.create({
    // ToDo: メッセージを自由に変更出来るようにする（Route Handler作らないと行けないかも）
    url: "http://demo.twilio.com/docs/voice.xml",
    to: `+81${TEL}`,
    from: process.env.TWILIO_PHONE_NUMBER // ここの電話番号はTwilioで取得した電話番号
  })
  .then((call: { sid: any; }) => console.log("OK: ", call.sid))
  .catch((err: any) => console.log("NG: ", err));
}