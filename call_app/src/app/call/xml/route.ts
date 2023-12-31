const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

export const GET = async (req: Request) => {
    const twiml = new VoiceResponse();
    twiml.say('うんちぶりぶり').lang('ja-JP');
    writeHead(200, {'Content-Type': 'text/xml'});
    end(twiml.toString());
  }
}