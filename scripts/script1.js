/* 1) johnny5 replies to Hello! */
module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });
}

/* 2) johnny5 responds to Hello, no exclamation point */
module.exports = function(robot) {
    robot.hear(/Hello/, function(res) {
      return res.send("Hi there!");
    });
}

/* 3) Hears "how is the weather" and replies */
module.exports = function(robot) {
    robot.hear(/How is the weather?/, function(res) {
      return res.send("It's always sunny in Philadelphia.");
    });
}

/* 4) Adds two numbers together */
bot.respond(/add (.*) and (.*)/i, function(msg) {
  var a;
  var b;
  a = parseInt(msg.match[1]);
  b = parseInt(msg.match[2]);
  c = a + b

  return msg.reply(a + " plus " + b + " = " + c);
});
