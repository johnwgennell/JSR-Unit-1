module.exports = function(robot) {

// 1) johnny5 replies to Hello!
    robot.hear(/Hello!/, function(res) {
      return res.send("Hi there!");
    });

// 3) Hears "how is the weather" and replies
    robot.hear(/How is the weather?/, function(res) {
      return res.send("It's always sunny in Philadelphia.");
    });

    // say Hello! to Kitt
	robot.respond(/hi|hello/i, function(hi) {
		return hi.send("Hi there!");
	});
	// ask Kitt "Pizza?"
	robot.hear(/\bpizza\b/i, function(res) {
		var donut = "https://static.simpsonswiki.com/images/thumb/9/9b/Donut.png/40px-Donut.png";
		return res.send("No thanks. I'm full. \n " + donut);
	});



}
