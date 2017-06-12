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
