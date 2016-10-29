const twilio = require('./twilio.js').modules
const _ = require('underscore')
const CronJob = require('cron').CronJob;
const twilioSMS = twilio.smsProtocol

const job = new CronJob({
  cronTime: '* * * * * *', //change this to every 6 hours
  onTick: function() {
    let d = new Date();
    console.log('twilio', d.getTime(), twilioSMS())
    // underscore compare objects return diff for each user
    // send message to user with unmet requirements
    // use moment to retrieve time untill trip
    // use phone node module to parse all incoming number to e164
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
     job.stop(); // remove this for production
  },
  onComplete: function() {

  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();