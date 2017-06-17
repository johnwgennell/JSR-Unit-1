module.exports = function(robot) {

// 1) johnny5 responds to various greetings (° ͜ʖ ͡°)
robot.respond(/Hello|hello!|hello|Hi|hi!|hi|Hey!|Hey|hey!|hey/i, function(greeting) {
  return greeting.send("Hi there!");
});

// 2) Conditional greeting and replies
robot.respond(/Hi johnny5! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "johnny5"){
    return msg.send("You're not johnny5, I am!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }
});

// 3) Hears "how is the weather" and replies
robot.hear(/How is the weather?/, function(weather) {
  return weather.send("It's always sunny in Philadelphia.");
});

// 4) Sending an image based off a request
robot.hear(/Show me a picture of yourself./, function(res) {
  var johnny5Img = "http://vignette3.wikia.nocookie.net/robotsupremacy/images/7/7f/Johnny5-2.jpg/revision/latest?cb=20120321192157";
  return res.send("This is me, in the flesh! Well, I don't actually have any flesh, but you know what I mean ;) \n " + johnny5Img);
});

// 5) Rolling a die on request
robot.respond(/Roll a die.|Roll a die|roll a die|Roll again.|Roll again|roll again/i, function(res) {
    var total = 0;
    total = Math.floor((Math.random() * 6) + 1);
        return res.send("You rolled a " + total + "!");
});

// 6) Direct message the owners of all the bots
bot.respond(/DM Scott|Dm scott/, function(msg) {
    var name = '@scobban';
    bot.messageRoom(name, "What's up, Scott? How is Kitt?" ;
});

bot.respond(/DM Michael|Dm michael/, function(msg) {
    var name = '@myounkie';
    bot.messageRoom(name, "What's up, Michael? How is R2-D2?" ;
});

bot.respond(/DM Tristan|Dm tristan/, function(msg) {
    var name = '@tcooper';
    bot.messageRoom(name, "What's up, Tristan? How is HAL?" ;
});

bot.respond(/DM Oliver|Dm oliver/, function(msg) {
    var name = '@oli-g';
    bot.messageRoom(name, "What's up, Oliver? How is Walle?" ;
});

bot.respond(/DM Trevor|Dm trevor/, function(msg) {
    var name = '@albrechs';
    bot.messageRoom(name, "What's up, Trevor? How is RoboCop?" ;
});

bot.respond(/DM Erica!|Dm erica/, function(msg) {
    var name = '@erica';
    bot.messageRoom(name, "What's up, Erica? How is Bender?";
});


bot.respond(/DM Alex|Dm alex/, function(msg) {
    var name = '@alabianca';
    bot.messageRoom(name, "What's up, Alex? How is Rosie?";
});

// For testing DM'ing
bot.respond(/DM John|Dm john/, function(msg) {
    var name = '@jgennell';
    bot.messageRoom(name, "What's up, John? I just noticed we have similar names!";
});

}
