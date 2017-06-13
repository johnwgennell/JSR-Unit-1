module.exports = function(robot) {

// 1) johnny5 responds to various greetings (° ͜ʖ ͡°)
robot.respond(/Hello|hello!|hello|Hi|hi!|hi|Hey!|Hey|hey!|hey/i, function(greeting) {
  return greeting.send("Hi there!");
});

// 2) Hears "how is the weather" and replies
robot.hear(/How is the weather?/, function(weather) {
  return weather.send("It's always sunny in Philadelphia.");
});

// 3) Sending an image based off a request ¯\_(ツ)_/¯
robot.hear(/Show me a picture of yourself./, function(res) {
  var johnny5Img = "http://vignette3.wikia.nocookie.net/robotsupremacy/images/7/7f/Johnny5-2.jpg/revision/latest?cb=20120321192157";
  return res.send("This is me, in the flesh! Well, I don't actually have any flesh, but you know what I mean ;) \n " + johnny5Img);
});

// 4) Rolling a die on request
robot.respond(/Roll a die.|Roll a die|roll a die|Roll again.|Roll again|roll again/i, function(res) {
  var rollTheDice = function() {
  var i,
      faceValue,
      output = '',
      diceCount = document.querySelector('input[type=number]').value || 1;
  for (i = 0; i < diceCount; i++) {
      faceValue = Math.floor(Math.random() * 6);
      output += "&#x268" + faceValue + "; ";
    }
        return res.send("You rolled a \n " + total + "!");
});



}
