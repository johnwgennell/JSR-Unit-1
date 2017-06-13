module.exports = function(robot) {

// 1) johnny5 replies to Hello!
robot.hear(/Hello!/, function(res) {
  return res.send("Hi there!");
});

// 2) johnny5 responds to various greetings (° ͜ʖ ͡°)
robot.respond(/Hello|hello!|hello|Hi|hi!|hi|Hey!|Hey|hey!|hey/i, function(greeting) {
  return greeting.send("Hi there!");
});

// 3) Hears "how is the weather" and replies
robot.hear(/How is the weather?/, function(weather) {
  return weather.send("It's always sunny in Philadelphia.");
});

// 4) Sending an image based off a request ¯\_(ツ)_/¯
robot.hear(/Show me a picture of yourself./, function(res) {
  var johnny5Img = "http://vignette3.wikia.nocookie.net/robotsupremacy/images/7/7f/Johnny5-2.jpg/revision/latest?cb=20120321192157";
  return res.send("This is me, in the flesh! Well, I don't actually have any flesh, but you know what I mean ;) \n " + johnny5Img);
});

// 5) Responding directly to name
bot.respond(/Hi johnny5! My name is (.*)/i, function(msg) {
   var name;
   name = msg.match[1];
   if (name == "johnny5"){
     return msg.send("You're not johnny5, I am!");
   } else {
     return msg.reply("Nice to meet you, " + name + "!");
   }
 });



}
