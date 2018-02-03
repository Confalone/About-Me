'use strict';

var userPoints = 0;

console.log('What\'s up folks?');

alert('Welcome to my guessing Game!');

var user = prompt('What\'s your name?');

alert('I hope you are having a great day ' + user);



function q1() {
  var answer = prompt('Do I like to be outdoors?', 'type yes or no').toLowerCase();

  console.log(answer);

  //check if user answer is correct
  //What is correct?
  //find out what the ansewr is?
  //to lowercase
  //use confirm box
  if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++;
    console.log(userPoints);
  } else {
    alert('I do love my couch sometimes too, but prefer to be outside.');
  }

  alert('You have ' + userPoints + ' point.');
}
function q2() {
  var answerSwim = prompt('Do I like to go swimming?', 'type yes or no').toLowerCase();

  console.log(answerSwim);

  if (answerSwim === 'yes' || answerSwim === 'y') {
    userPoints++;
    console.log(userPoints);
  } else {
    alert('That\'s cool, someteims I think it\'s just too cold for getting wet.');
  }
  alert('You now have a score of' + userPoints);
}

function q3() {
  var answerBike = prompt('Do I like to ride bicycles? ', 'type yes or no').toLowerCase();

  console.log(answerBike);

  if (answerBike === 'yes' || answerBike === 'y') {
    userPoints++;
    console.log(userPoints);
  } else {
    alert('I like to drive and take the bus sometimes too.');
  }
  alert('You are running a score of ' + userPoints);
}

function q4() {
  var answerComputers = prompt('Do I like computers?', 'type yes or no').toLowerCase();

  console.log(answerComputers);

  if (answerComputers === 'yes' || answerComputers === 'y') {
    userPoints++;
    console.log(userPoints);
  } else {
    alert('Of course I do.');
  }
}

function q5() {
  var answerCoding = prompt('Do I like coding?', 'type yes or no').toLowerCase();

  if (answerCoding === 'yes' || answerCoding === 'y') {
    userPoints++;
    console.log(userPoints);
  } else {
    alert('True, I am learning.');
  }
  if (userPoints > 3) {
    alert('So far your score is ' + userPoints + '  We have a good amount in common.');
  } else {
    alert('Thus far your score is ' + userPoints + '  We don\'t have too much in common, but i still love you and hope you have an amazing day');
  }
}
//question 6
//what is my fav number?
//too high too low

//4 guesses
function q6() {
  var ans = 9;
  var counter = 1;
  var answerFavnumber;

  while (counter < 4) {
    answerFavnumber = parseInt(prompt('What is your favorite number?', 'type 1-10 please'));

    if (ans > answerFavnumber) {
      alert('Too low, you have guessed ' + counter + ' times.');
      counter++;
    } else if (ans < answerFavnumber) {
      alert('Too high, you have guessed ' + counter + ' times.');
      counter++;
    } else if (ans.isNaN || ans === null) {
      alert('Put in a number.');
    } else {
      alert('Correct.');
      break;
    }
  }
}

// for (var i = 0; i < 5; i++) {
//   answerFavnumber = parseInt(prompt(answerFavnumber));
//   console.log(answerFavnumber);
//   if (answerFavnumber > number) {
//     counter++;
//     alert('Too high, you have guessed ' + counter + ' times.');
//   }
//   else if (answerFavnumber < number) {
//     counter++;
//     alert('Too low, you have guessed ' + counter + 'times.');
//   }
//   else if (answerFavnumber === number) {
//     alert('Bingo.');
//     userPoints++;
//     break;
//   }
// }

//question7
//multiple correct answers stored in an array
//six tries
//


function q7() {
  var correctAnswers = ['scent of a woman', 'gladiator', 'braveheart', 'the big lebowski', 'it\'s a wonderful life', 'grandma\'s boy', 'the shawshank redemption', 'the godfather', 'pulp fiction', 'american history X'];
  var cor = false;
  for (var attempts = 0; attempts < correctAnswers.length; attempts++) {
    if (cor === false)
    {
      var answerFavMovie = prompt('Guess what my favorite movie is?', 'type movie here').toLocaleLowerCase();
      console.log(answerFavMovie);
      alert(answerFavMovie + ' is one of your favorite movies.');
      for (var i=0; i<correctAnswers.length; i++) {
        if (i === 9) {
          if
          (answerFavMovie !== correctAnswers[i]) {
            alert('Oh well, guess again');
            attempts++;
          }
        } else if (answerFavMovie === correctAnswers[i]) {
          alert('I Love that movie too ' + user + '.');
          userPoints++;
          cor = true;
          break;
        }
      }
    }
    else {
      break;
    }
  }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

alert(user + '\'s final score is ' + userPoints + '.');
alert(user + ' got ' + userPoints + ' questions right out of 7!');