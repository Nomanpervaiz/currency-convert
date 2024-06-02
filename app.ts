#! /usr/bin/env node
import inquirer from "inquirer";
let currencyRate:any = {
  USD: 1,
  EUR: 0.91,
  GPB: 0.76,
  INR: 74.57,
  PKR: 280
};
let userInp = await inquirer.prompt([
  {
    name: "from",
    message: "convert currency from",
    type: "list",
    choices: ["USD", "GPB", "INR", "PKR", "EUR"],
  },
  {
    name: "to",
    message: "convert to currency",
    type: "list",
    choices: ["USD", "GPB", "INR", "PKR", "EUR"],
  },
  {
    name: "amount",
    message: "currency amount",
    type: "number",
  },
]);

let conFrom  = currencyRate[userInp.from]
let conTo  = currencyRate[userInp.to]
let conAmount  = userInp.amount
let curr = conAmount/conFrom
let result = curr*conTo
console.log(`${conAmount} ${userInp.from} is ${result.toFixed(2)} ${userInp.to}`);






