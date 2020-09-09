'use strict';

var userScore = 0;

var quesOne = prompt('Is my name Shihab?').toLowerCase();
// if (quesOne === 'no' || quesOne === 'n') {
//     alert('correct');
//     console.log('right answer');
// } else if (quesOne === 'yes' || quesOne === 'y') {
//     alert('wrong');
//     console.log('your answer is wrong!');
// } else { alert('yuor answer is not recognized') }

//Switch statement for quesOne
switch (quesOne) {
case 'no':
case 'n':
  alert('correct');
  userScore++;
  break;
case 'yes':
case 'y':
  alert('wrong!');
  break;
default:
  alert('unrecognized answer');
}


var quesTwo = prompt('Do I love cars?').toLowerCase();

// if (quesTwo === 'yes' || quesTwo === 'y') {
//     alert('correct');
//     console.log('right answer');
// } else if (quesTwo === 'no' || quesTwo === 'n') {
//     alert('wrong answer');
//     console.log('your answer is wrong!');
// } else { alert('yuor answer is not recognized') }

//Switch statement for quesTwo
switch (quesTwo) {
case 'yes':
case 'y':
  alert('correct');
  userScore++;
  break;
case 'no':
case 'n':
  alert('wrong!');
  break;
default:
  alert('unrecognized answer');

}

var quesThree = prompt('Am I planning to get a bike?').toLowerCase();
// if (quesThree === 'yes' || quesThree === 'y') {
//     alert('correct');
//     console.log('right answer')
// } else if (quesThree === 'no' || quesThree === 'n') {
//     alert('your answer is wrong!');
//     console.log('your answer is wrong!')
// } else { alert('yuor answer is not recognized') }

//Switch statement for quesThree
switch (quesThree) {
case 'yes':
case 'y':
  alert('correct');
  userScore++;
  break;
case 'no':
case 'n':
  alert('wrong!');
  break;
default:
  alert('unrecognized answer');

}


var quesFour = prompt('Sketching is my hobby?').toLowerCase();
// if (quesFour === 'yes' || quesFour === 'y') {
//     alert('correct');
//     console.log('right answer')
// } else if (quesFour === 'no' || quesFour === 'n') {
//     alert('your answer is wrong!');
//     console.log('your answer is wrong!')
// } else { alert('yuor answer is not recognized') }

//Switch statement for quesFour
switch (quesFour) {
case 'yes':
case 'y':
  alert('correct');
  userScore++;
  break;
case 'no':
case 'n':
  alert('wrong!');
  break;
default:
  alert('unrecognized answer');
}


var quesFive = prompt('Am I 30 years old?').toLowerCase();
// if (quesFive === 'yes' || quesFive === 'y') {
//     alert('correct');
//     console.log('right answer')
// } else if (quesFive === 'no' || quesFive === 'n') {
//     alert('your answer is wrong!');
//     console.log('your answer is wrong!')
// } else { alert('yuor answer is not recognized') }

//Switch statement for quesFive
switch (quesFive) {
case 'no':
case 'n':
  alert('correct');
  userScore++;
  break;
case 'yes':
case 'y':
  alert('wrong!');
  break;
default:
  alert('unrecognized answer');
}
var userName = prompt('Who are you')
alert('You are welcome ' + userName + '!');




//loop question

var myHeight = prompt('can you guess my height?');
myHeight = Number(myHeight);
console.log(myHeight);

for (var i = 0; i < 3; i++) {
  if (myHeight === 183) {
    alert('correct')
    userScore++;
    break;
  }
  else if (myHeight > 183) {
    alert('too high!');
    myHeight = prompt('can you guess my height?');
  } else if (myHeight < 183) {
    alert('too low!');
    myHeight = prompt('can you guess my height?');
  }
}
alert('my hight is 183cm');









//array question

var myHobbies = ['sketching', 'cycling', 'reading', 'running', 'writing'];
//var userGuess = prompt('can you guess any of my hobbies?').toLowerCase();
//var userEntries = 1;

for (var count = 1; count <= 6; count++) {
  var  userGuess = prompt('can you guess any of my hobbies?');
  for (var arr = 0; arr < myHobbies.length; arr++) {
    console.log(userGuess);
    if (userGuess === myHobbies[arr]) {
      alert('Right ' + userGuess + ' is one of my interests');
      count = 6;
      userScore++;
      break;
    }
  }

}
alert('all possible answers ' + myHobbies );

//score task

alert('your result is ' +userScore+ ' out of 7');
















// for (var j = 1; j <= 5; j++) {

//     if (userGuess === myHobbies[j]) {
//         alert('Right' + userGuess + 'is one of my interests');
//     }
//     else if (userGuess !== myHobbies[j]) {
//         alert('you have chances left');
//     }
// }


