'use strict';

var userPoints = 0;

console.log('What\'s up folks?');

alert('Welcome to my guessing Game!');

var user = prompt('What\'s your name?');

alert('I hope you are having a great day ' + user);



function q1() {
var answer = prompt('Do you like to be outdoors?' , 'type yes or no').toLowerCase();

console.log(answer);

//check if user answer is correct
//What is correct?
//find out what the ansewr is?
//to lowercase
//use confirm box
if (answer === 'yes' || answer === 'y'){
  //if it's correct give them a point
  userPoints++;
  console.log(userPoints);
} else {
  alert('I love my couch sometimes too.');
}

alert ('You have ' + userPoints + ' point.');
}
function q2(){
var answerSwim = prompt('Do you like to go swimming?' , 'type yes or no').toLowerCase();

console.log(answerSwim);

if (answerSwim === 'yes' || answerSwim === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('That\'s cool, someteims it\'s just too cold for getting wet.');
}
alert ('You now have a score of' + userPoints);
}

function q3(){
var answerBike = prompt('Do you like to ride bicycles? ' , 'type yes or no').toLowerCase();

console.log(answerBike);

if (answerBike === 'yes' || answerBike === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('It\'s prob safer to ride the bus anyway.');
}
alert('You are running a score of ' + userPoints);
}

function q4(){
var answerComputers = prompt ('Do you like computers?' , 'type yes or no').toLowerCase();

console.log(answerComputers);

if (answerComputers === 'yes' || answerComputers === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('Wow I am schocked.');
}
}

function q5(){
var answerCoding = prompt ('I bet you like coding right?' , 'type yes or no').toLowerCase();

if (answerCoding === 'yes' || answerCoding === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('Again, shocked');
}
if (userPoints > 3){
  alert('So far your score is ' + userPoints + '  We have a good amount in common.');
} else {
  alert('Thus far your score is ' + userPoints + '  We don\'t have too much in common, but i still love you and hope you have an amazing day');
}
}
//question 6
//what is my fav number?
//too high too low

//4 guesses
function q6(){
var answerFavnumber = prompt ('What is your favorite number?' , 'type 1-10 please').toLowerCase();

var counter = 0;
var number = 9;

for (var i = 4; i >= 0; i--){
  answerFavnumber = parseInt (prompt(answerFavnumber));
  console.log(answerFavnumber);
  if (answerFavnumber > number){
    counter++;
    alert('Too high, you have guessed ' + counter + ' times.');
  }
  else if (answerFavnumber < number){
    counter++;
    alert('Too low, you have guessed ' + counter + 'times.');
  }
  else if (answerFavnumber === number){
    alert ('Bingo.');
    userPoints++;
    break;
  }
}
}
//question7
//multiple correct answers stored in an array
//six tries
//


function q7(){
var correctAnswers = ['Scent of a Woman', 'Gladiator', 'Braveheart', 'The Big Lebowski', 'It\'s a wonderful life', 'Grandma\'s boy', 'The Shawshank Redemption', 'The Godfather', 'Pulp fiction', 'American History X'];

for (var attempts = 0; attempts<correctAnswers.length; attempts++){
  var answerFavMovie = prompt('Guess what my favorite movie is?' , 'type movie here').toLocaleLowerCase();
  console.log(answerFavMovie);
  alert (answerFavMovie + ' is one of your favorite movies.');
  if
  (answerFavMovie !== correctAnswers) {
    alert('Oh well, guess again');
    attempts++;
  } else {
    alert('I Love that movie too ' + user + '.');
    userPoints++;
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