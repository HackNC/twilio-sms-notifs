// create a Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function sendScheduledSMS(){
    const sendWhen = new Date(new Date().getTime() + 61 * 60000); // sends 61 minutes after the current time, sendWhen constant is used to send the message
}

Promise.all (
    numbers.map(number => {
      return client.messages.create({
       //githubusername.io
       //body: '10 minutes left!',
       //body: 'We are at the 5 Minute Warning!',
       //body: 'Come to the great hall for Spaghetti!',
       //body: 'ATTENTION! 30 minutes left till judgment!'
       body: 'Judgment time!',
       //body: Come to the great hall for a java workshop!
       //body: Come to the great hall for a python workshop to create a random number generator!
       //body: 'Testing one, two, three! Come to the great hall! BTW This is Elvin from HackNC, not a hacker, text me if you got this message if you are able to atm haha.', 
       //from: '+13254253605',
       from: '+19362376004',
     
       
       
       to: number,
      });
     })
  )
    .then(message => console.log(message.sid));