const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

if (!accountSid || !authToken) throw new Error('Twilio credentials missing');

export const client = require('twilio')(accountSid, authToken);