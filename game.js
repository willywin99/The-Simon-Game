let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
  let randomNumber = Math.floor((Math.random() * 3));
  return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);
