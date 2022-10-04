let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
  let randomNumber = Math.floor((Math.random() * 4));
  // let randomChosenColour = buttonColours[nextSequence()];
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // 1. Use jQuery to select the button with the same id as the randomChosenColour
  // $(`#${randomChosenColour}`).on('click', function () {
  //   // 2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  //   $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    
  //   // 3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  //   let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  //   audio.play();
  // });

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  let audio = new Audio(`sounds/${randomChosenColour}.mp3`);
  audio.play();

  // return randomChosenColour;
}

// nextSequence();


