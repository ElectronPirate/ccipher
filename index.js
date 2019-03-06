#!/usr/bin/env node

const inquirer = require("inquirer"); // A collection of common interactive command-line user interfaces
const chalk = require("chalk"); // Terminal string styling
const figlet = require("figlet"); // A program for making large letters out of ordinary text
const shell = require("shelljs"); // Portable Unix shell commands for Node.js


// this function is the script introduction

const init = () => {
    console.log(
      chalk.green(
        figlet.textSync("CCipher", {
          font: "Ghost",
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
  };
  
  // function that asks the questions


  const askQuestions = () => {
    const questions = [
      {
        name: "text",
        type: "input",
        message: "Enter text to encode: "
      },
      {
        type: "input",
        name: "shift",
        message: "Enter your encoding key [non-negative integer]: ",
        
        
      }
    ];
    return inquirer.prompt(questions);
  };
  

// main function to encrypt a string of characters

  function encrypt(text, shift) {
    var result = "";
    
 
        //loop through each caharacter in the text
        for (var i = 0; i < text.length; i++) {
              
             //get the character code of each letter
            var c = text.charCodeAt(i);
 
            // handle uppercase letters
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65); 
 
            // handle lowercase letters
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);
 
            // its not a letter, let it through
            }else {
                result += text.charAt(i);
            }
        }
    
    return result;
}

  
  
// show success message

  const success = result => {
    console.log(
      chalk.white.bgGreen.bold(`Encrypted message is: ${result}`)
    );
  };

  
  
  const run = async () => {
   
    // show script introduction
    init();
  
    // ask questions
    const answers = await askQuestions();
    const { text, shift } = answers;
  
    // Shift text
    const result = encrypt(text, shift);

    
  
    // show success message
    success(result);
    
  };
  
  run();