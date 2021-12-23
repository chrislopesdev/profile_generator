const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const questionsAnswersObj = {
  'What\'s your name?': '',
  'What\'s an activity you like doing?': '',
  'What do you listen to while doing that?': '',
  'Which is your favorite meal': '',
  'What\'s your favourite thing to eat for that meal?': '',
  'Which sport is your favourite?': '',
  'What is your superpower?': '',
};

const questionArr = Object.keys(questionsAnswersObj);

const questionaireRecurisive = (i) => {
  rl.question(`${questionArr[i]} `, (answer) => {
    console.log(`Thank you for your answer: ${answer}`);
    questionsAnswersObj[questionArr[i]] = answer;

    if (i < questionArr.length - 1) {
      questionaireRecurisive(i + 1);
    } else {
      rl.close();
      console.log(`${questionsAnswersObj[questionArr[0]]} likes ${questionsAnswersObj[questionArr[1]]} while listening to ${questionsAnswersObj[questionArr[2]]}. Favourite meal of the day is ${questionsAnswersObj[questionArr[3]]} when they like to eat ${questionsAnswersObj[questionArr[4]]}. ${questionsAnswersObj[questionArr[0]]} enjoys watching ${questionsAnswersObj[questionArr[5]]}. Their super power is ${questionsAnswersObj[questionArr[6]]}.`);
    }
  });
};

questionaireRecurisive(0);
