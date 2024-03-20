const VoiceResponse = require('twilio').twiml.VoiceResponse;



export default function GET() {
  const response = new VoiceResponse();
  response.say('Hello!');
  return response
}