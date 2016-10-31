process.env.TWILIO_ACCOUNT_SID = 'AC4cea65a763fb0f0a880429ea55470314';
process.env.TWILIO_AUTH_TOKEN = '2e2534ae7182ca4a5415acd1b9600644';
process.env.TWILIO_PHONE_NUMBER = '+16078214598'
let emergency_code = '392GBtkZGFHalFN1fi13cd6bHKBOb6U5OscItup';

var client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

exports.modules = {
    smsProtocol: function(phoneNumber, message) {
        process.env.CELL_PHONE_NUMBER = phoneNumber || '+16077650585'
        client.messages.create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: process.env.CELL_PHONE_NUMBER,
          body: message || "Welcome Campr!!"
        }, function(err, message) {
          if(err) {
            console.error(err.message);
          }
        });
    }
}