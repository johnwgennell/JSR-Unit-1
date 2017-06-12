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
