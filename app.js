'use strict';

var userPoints = 0;

console.log('What\'s up folks?');

alert('Welcome to my guessing Game!');

var user = prompt('What\'s your name?');

alert('I hope you are having a great day ' + user);

var answer = prompt('Do you like to be outdoors?' , 'type yes or no').toLowerCase();

console.log(answer);

//check if user answer is correct
//What is correct?
//find out what the ansewr is?
//to lowercase
//use confirm box

if (answer=== 'yes' || answer === 'y'){
  //if it's correct give tehm a point
  userPoints++;
  console.log(userPoints);
} else {
  alert('I love my couch sometimes too.');
}

alert ('You have ' + userPoints + ' point.');

var answerSwim = prompt('Do you like to go swimming?' , 'type yes or no').toLowerCase();

console.log(answerSwim);

if (answerSwim === 'yes' || answer === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('That\'s cool, someteims it\'s just too cold for getting wet.');
}

alert ('You now have a score of' + userPoints);

var answerBike = prompt('Do you like to ride bicycles? ' , 'type yes or no').toLowerCase();

console.log(answerBike);

if (answerBike === 'yes' || answerBike === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('It\'s prob safer to ride the bus anyway.');
}
alert('You are running a score of ' + userPoints);

var answerComputers = prompt ('Do you like computers?' , 'type yes or no').toLowerCase();

console.log(answerComputers);

if (answerComputers === 'yes' || answerComputers === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('Wow I am schocked.');
}

var answerCoding = prompt ('I bet you like coding right?' , 'type yes or no').toLowerCase();

if (answerCoding === 'yes' || answerCoding === 'y'){
  userPoints++;
  console.log(userPoints);
} else {
  alert('Again, shocked');
}

//question 6
//what is my fav number?
//too high too low
//4 guesses

for (var i =4; i >= 0; i--){
  var answerFavnumber = parseInt (prompt(answerFavnumber));
  console.log(answerFavnumber);
  if (answerFavnumber > 9){
    alert('Too high ' + ' guesses left.')}
  if (answerFavnumber < 9){
    alert ('Too low ' + ' guesses left.')}
  else {
    alert ('Bingo.');
    userPoints++;
    break;
  }
//ar answerFavnumber = prompt ('What is my favorite number, pick between 1-10?');
//while (answerFavnumber != 9) {
//alert('Nope, ' + answerFavnumber + ' too high.');
//var answerFavnumber = prompt ('What is my favorite number, pick between 1-10?');
//}
//if (answerFavnumber > 9) {
//alert('Nope, ' + answerFavnumber + ' too high.');
//var answerFavnumber = prompt ('What is my favorite number, pick between 1-10?');
//}
//if (answerFavnumber < 9); {
//alert('Nope, ' + answerFavnumber + ' too low,')
//var answerFavnumber = prompt ('What is my favorite number, pick between 1-10?');
//}
//var answerFavnumber = prompt ('What is my favorite number, pick between 1-10?');

//for (var i = 4; i >= 0; i--); {
  //var answerFavnumber = parseInt(prompt('What is my favorite number, pick between 1-10?'));
  //console.log(answerFavnumber);
  //if (answerFavnumber > 9) {
    //alert('Nope, ' + user + ' too high');
  //}
  //if (answerFavnumber < 9) {
    //alert('Nope, ' + user + ' too low');
 // }
  //else (answerFavnumber === 9); {
    //alert('You\'re right ' + user);
    //userPoints++;
    //break;
  //}
//}

//question 7
//fav sports
//6 attempts to get 1 answer correct
//as tries are used up;  answer displys a mesage to the user indicatingall the pos answers
//var sports = prompt ('What is my favorite sport.');


if (userPoints > 3){
  alert('Your final score is ' + userPoints + '  We have a good amount in common.');
} else {
  alert('Your final score is ' + userPoints + '  We don\'t have too much in common, but i still love you and hope you have an amazing day');
}{}
alert('Your final score is ' + userPoints);