import {client} from "@/utils/twilio/client"

export default async function Home() {
  return (
    <form action={async (formData) => {
      "use server";
      const TEL = formData.get("tel")
      await client.calls.create({
        url: "http://demo.twilio.com/docs/voice.xml",
        to: `+81${TEL}`,
        from: '+18174354690'
      })
        .then((call: {
          sid: any;
        }) => console.log("OK: ", call.sid))
        .catch((err: any) => console.log("NG: ", err));
    }}>
      <input type={"tel"} name={"tel"} defaultValue={"7013611123"} placeholder={"7012345678"}/>
      <input type={"submit"}/>
    </form>
  )
}