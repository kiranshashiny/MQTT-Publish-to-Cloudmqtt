// this sends to the cloudmqtt.com
// open the cloudmqtt.com
// and look for the topic from /from laptop
// you should see the message there.

var mqtt    = require('mqtt');

options={
clientId:"mqttjs01",
username:"oxefqvkn",
password:"uT.......",
port:19757,
clean:true};

var client  = mqtt.connect("mqtt://m12.cloudmqtt.com",options);
console.log("connected flag  "+client.connected);

client.on("connect",function(){	
console.log("connected");
console.log("connected flag  "+client.connected);
client.publish("/fromlaptop", "Daksh is here...Turn ligths on ")


client.end();
})
