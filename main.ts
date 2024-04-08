#!/usr/bin/env node 

import inquirer from "inquirer";
console.log("============================WELCOME=============================");

 console.log("=========================== CURRENCY CONVERTER========================")
const currency: any = {
  USD: 1, //
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};
let user_answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message:"enter from currency ❓❓",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "PLEASE SELECT OPTIONS❔❔",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "ENTER AMOUNT 💲➕✔",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);



