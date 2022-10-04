let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern
let userClickedPattern = [];

// 1. Use jQUery to detect when any of the buttons are clicked and trigger a handler function
$(`.btn`).on('click', function () {
  // 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked
  let userChosenColour = $(this).attr('id');
  
  // 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
  let randomNumber = Math.floor((Math.random() * 4));
  // let randomChosenColour = buttonColours[nextSequence()];
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();
}
