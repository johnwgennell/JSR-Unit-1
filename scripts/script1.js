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

/* 5) Responds to favorite food */
  return msg.reply(a + " plus " + b + " = " + c);
});

bot.respond(/What's your favorite food?/, function(res) {
  return res.send("Nitroglycerin!");
});

/* 6) if/else conditional for introduction */
bot.respond(/Hi johnny5! My name is (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "johnny5"){
    return msg.send("You're not johnny5--I'm johnny5!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }
});

/* 7) Hears "how does this work?" and messages room and user */
robot.respond /How does this work?/i, (res) ->
    room =  'general'
    robot.messageRoom room, "Is don't know what you're talking about. Ask Tyler."
    res.reply  "You could ask Sonyl too, just don't ask me."

/* 8) Switch statement to cover various questions */
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
