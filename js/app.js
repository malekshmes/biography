'use strict';

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
