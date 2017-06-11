module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });
}

bot.respond(/What's your favorite food?/, function(res) {
  return res.send("Dynamite, boi.");
});

bot.respond(/Hi johnny5! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "johnny5"){
    return msg.send("You're not johnny5--I'm johnny5!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }

});
