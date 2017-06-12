// 1) johnny5 replies to Hello!
module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });
}

// 2) johnny5 resonds to various greetings
robot.respond(/hello|hello!|Hi!|hi!|Hi|hi|Hey!|hey!|Hey|hey/i, function(res) {
      return res.reply(res.random(greetings));
    });

// 3) johnny5 responds to Hello, no exclamation point
module.exports = function(robot) {
    robot.hear(/Hello/, function(res) {
      return res.send("Hi there!");
    });
}

// 4) Hears "how is the weather" and replies
module.exports = function(robot) {
    robot.hear(/How is the weather?/, function(res) {
      return res.send("It's always sunny in Philadelphia.");
    });
}

/*
// 6) Switch statement to cover various questions
module.exports = function(bot) {
    bot.respond(/what is your favorite (.*)/, function(msg) {
  var fav;
  matches = msg.match;
fav = matches[1];

  console.log(fav);
  switch (fav) {
    case "color":
      return msg.reply("Mine is gray, the color of my sleek metal exterior.");
      break;
    case "band":
      return msg.reply("I would have to say cyborg https://www.youtube.com/watch?v=oHu13xU5Jx0");
      break;
    case "programming language":
      return msg.reply("Javascript, of course!");
      break;
    default:
      return msg.reply("You're my favorite " + fav + ". Am I yours?");
  }
});
*/
