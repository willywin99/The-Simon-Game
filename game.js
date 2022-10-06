let gamePattern = [];

let buttonColours = ['red', 'blue', 'green', 'yellow'];

let userClickedPattern = [];

let started = false;

let level = 0;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text(`Level ${level}`);
    nextSequence();
    started = true;
  }
});

$(`.btn`).on('click', function () {
  let userChosenColour = $(this).attr('id');
  
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
  userClickedPattern = [];

  level++;

  $('#level-title').text(`Level ${level}`);

  let randomNumber = Math.floor((Math.random() * 4));
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass('pressed');
  setTimeout(function () {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log('wrong');
  }
}
