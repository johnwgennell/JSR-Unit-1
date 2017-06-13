module.exports = function(robot) {

// 1) johnny5 responds to various greetings (° ͜ʖ ͡°)
robot.respond(/Hello|hello!|hello|Hi|hi!|hi|Hey!|Hey|hey!|hey/i, function(greeting) {
  return greeting.send("Hi there!");
});

robot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
  		var name;
  		name = msg.match[1];
  		if (name == "Hubot"){
    		return msg.send("You're not Hubot--I'm Hubot!");
  		} else {
    		return msg.reply("Nice to meet you, " + name + "!");
  		}


	});

// 2) Hears "how is the weather" and replies
robot.hear(/How is the weather?/, function(weather) {
  return weather.send("It's always sunny in Philadelphia.");
});

// 3) Sending an image based off a request ¯\_(ツ)_/¯
robot.hear(/Show me a picture of yourself./, function(res) {
  var johnny5Img = "http://vignette3.wikia.nocookie.net/robotsupremacy/images/7/7f/Johnny5-2.jpg/revision/latest?cb=20120321192157";
  return res.send("This is me, in the flesh! Well, I don't actually have any flesh, but you know what I mean ;) \n " + johnny5Img);
});

// 4) Rolling a die on request
robot.respond(/Roll a die.|Roll a die|roll a die|Roll again.|Roll again|roll again/i, function(res) {
    var total = 0;
    total = Math.floor((Math.random() * 6) + 1);
        return res.send("You rolled a " + total + "!");
});



}
