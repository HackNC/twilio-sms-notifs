# twilio-sms-notifs

## Background
The twilio-sms notification system uses node.js and the twilio API to send SMS messages out instantly to all phone numbers in a txt file.
The SMS notification system uses Node.js.

## Setup
- [ ] There are two main components: the node.js file, and the txt file.
- [ ] the node.js is where the code is located. The txt file is a list of phone numbers of all hackathon participants given to us when they sign up.
- [ ] The code reads the txt file line by line and puts each into an index in an array called numbers. Each line has one phone number. Each phone number must have a "+1" extension in the file. There should only be one phone number on each line.
- [ ] The Promise.all() method loops through the array of phone numbers and sends an SMS message to each one when the file is run in the terminal.
- [ ] The "body" instance stores the message being sent out in the form of a string. Whatever the user types as the string is sent out in the SMS message.
- [ ] The "from" instance stores the hackNC phone number, the "to" method stores where the message is being sent to. In this case, the  array of numbers is where the SMS message is going to.

## How to send the SMS message.
To use the API:
- [ ] Open up the file in an IDE such as Visual Studio Code.
- [ ] Enter the terminal and go to the directory where the file is located. To run the file, type the following in the command line (excluding quotations:
 'node send_sms.js' (node, followed by the filename, followed by .js after filename).
- [ ] Press enter and the API will send an SMS message to every number in the txt file.
## current progress
- [x] Created twilio api key
- [ ] Created a funcitonal synchronous API that sends SMS messages out to multiple numbers.


## technologies used
- [ ] node.js
- [ ] Twilio
- [ ] VS Code
