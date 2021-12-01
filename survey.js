const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// store all questions in object which will be populated with answers
let answerObj = {
  [`What's your name?`]: ``,
  [`What's an activity you like doing?`]: ``,
  [`What do you listen to while doing that?`]: ``,
  [`Which is your favorite meal`]: ``,
  [`What's your favourite thing to eat for that meal?`]: ``,
  [`Which sport is your favourite?`]: ``,
  [`What is your superpower?`]: ``
};

// create array from object keys
const questionArr = Object.keys(answerObj);

// create recursive function to ask questions from object until there are no more questions
const questionRecursive = function(i) {
  rl.question(`${questionArr[i]} `, (answer) => {
    console.log(`Thank you for your answer: ${answer}`);
    answerObj[questionArr[i]] = `${answer}`;
    // if i is less than the length of the question array it should increment to ask the next question in the array
    if (i < questionArr.length - 1) {
      questionRecursive(i + 1);
    } else {
      // if there are no more questions we should exit and return our profile
      rl.close();
      // console.log(answerObj);
      console.log();
      console.log(`${answerObj[questionArr[0]]} likes ${answerObj[questionArr[1]]} while listening to ${answerObj[questionArr[2]]}. Favourite meal of the day is ${answerObj[questionArr[3]]} when they like to eat ${answerObj[questionArr[4]]}. ${answerObj[questionArr[0]]} enjoys watching ${answerObj[questionArr[5]]}. Their super power is ${answerObj[questionArr[6]]}.`)
    }
  });
};

questionRecursive(0);
