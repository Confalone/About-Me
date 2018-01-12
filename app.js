'use strict'

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
    alert('I love my couch sometimes too.')
}

alert ('You have ' + userPoints + ' point.')

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
if (userPoints > 3){
    alert('Your final score is ' + userPoints + 'We have a good amount in common.');
} else {
    alert('Your fimnal score is ' + userPoints + 'We don\'t have too much in common, but i still love you and hope you have an amazing day');
}
alert('Your final score is ' + userPoints + '');

