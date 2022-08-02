// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const dotenv = require('dotenv');
const { append } = require('express/lib/response');
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
 //'+13365080858'

//array for all phone numbers goes here.

async function sendScheduledSMS(){
  const sendWhen = new Date(new Date().getTime() + 61 * 60000); // sends 61 minutes after the current time, sendWhen constant is used to send the message
}


const numbers = ['+17046993417', '+15712508955','+13365080858', '+13308613678', '+19806218983', '+19806218982', '+17046996482', '+19193586136', '+17049151801', '+15167219196'];

var fs = require('fs');

console.log('Executed Before File Reading');
const numbers = [];
fs.readFile('./clientsfile.txt', 'utf8', function(error, data) {
    //console.log(data);
    //numbers.push(data);
    if(error) throw error;
    var phonenumbers = data.toString().split("\n");
    for (i in phonenumbers) {
      console.log(phonenumbers);
      numbers.push(phonenumbers[i]);
    }
   
});

console.log('Executed Before File Reading');
const fs = require("fs"); 
var data = fs.readFileSync("clientsfile.txt"); 
var dataArr = data.toString('utf8').split("\n");  
console.log(dataArr); 

const numbers = dataArr;

console.log('Executed After File Reading, probably');
//console.log(numbers)

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
      scheduleType: 'fixed',
      sendAt: sendWhen.toISOString(),
     
     
     to: number,
    });
   })
)
  .then(message => console.log(message.sid));