// 1) johnny5 replies to Hello!
module.exports = function(robot) {
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });
}

// 2) johnny5 responds to Hello, no exclamation point
module.exports = function(robot) {
    robot.hear(/Hello/, function(res) {
      return res.send("Hi there!");
    });
}

// 3) Hears "how is the weather" and replies
module.exports = function(robot) {
    robot.hear(/How is the weather?/, function(res) {
      return res.send("It's always sunny in Philadelphia.");
    });
}

// johnny5 responds to name
robot.respond(/Hi johnny5! My name is (.*)/i, function(msg) {
     var name;
     name = msg.match[1];
     if (name == "johnny5"){
       return msg.send("You're not johnny5--I'm johnny5!");
     } else {
       return msg.reply("Nice to meet you, " + name + "!");
     }
});
