module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });
}

bot.respond(/add (.*) and (.*)/i, function(msg) {
  var a;
  var b;
  a = parseInt(msg.match[1]);
  b = parseInt(msg.match[2]);
  c = a + b

  return msg.reply(a + " plus " + b + " = " + c);
});
