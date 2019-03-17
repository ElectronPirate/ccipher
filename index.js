const inquirer = require('inquirer'); // A collection of common interactive command-line user interfaces
const chalk = require('chalk'); // Terminal string styling
const figlet = require('figlet');

const encrypt = require('./encrypt');
const decrypt = require('./decrypt');
// A program for making large letters out of ordinary text

// this function is the script introduction

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('CCipher', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};

// function that asks the questions

const decodeOEncodeQuestion = () => {
  const questions = [
    {
      name: 'option',
      type: 'string',
      message: 'Press d to decode or e to encode'
    }
  ];
  return inquirer.prompt(questions);
};

const encodeQuestions = () => {
  const questions = [
    {
      name: 'text',
      type: 'input',
      message: 'Enter text to encode: '
    },
    {
      type: 'input',
      name: 'shift',
      message: 'Enter your encoding key [non-negative integer]: '
    }
  ];
  return inquirer.prompt(questions);
};

const continueQuestion = () => {
  const questions = [
    {
      name: 'stay',
      type: 'string',
      message: 'Would you like to continue: y/n'
    }
  ];
  return inquirer.prompt(questions);
};

const decodeQuestions = () => {
  const questions = [
    {
      name: 'text',
      type: 'input',
      message: 'Enter text to decode: '
    },
    {
      type: 'input',
      name: 'shift',
      message: 'Enter your encoding key [non-negative integer]: '
    }
  ];
  return inquirer.prompt(questions);
};

// main function to encrypt a string of characters


// show success message

const success = result => {
  console.log(chalk.white.bgGreen.bold(`Encrypted message is: ${result}`));
};

const runEncode = async () => {
  // ask questions
  const encodeAnswers = await encodeQuestions();
  const { text, shift } = encodeAnswers;

  // Shift text
  const result = encrypt(text, shift);

  // show success message
  success(result);
};

const runDecode = async () => {
  // ask questions
  const { text, shift } = await decodeQuestions();

  // Shift text
  const result = decrypt(encrypt, text, shift);

  // show success message
  success(result);
};

const run = async (welcome = () => {}) => {
  welcome();
  const { option } = await decodeOEncodeQuestion();

  if (option === 'e') {
    await runEncode();
  }

  if (option === 'd') {
    await runDecode();
  }

  const { stay } = await continueQuestion();

  if (stay === 'y') {
    run();
  }
};

run(init);