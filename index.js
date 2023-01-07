#!/usr/bin/env node
import inquirer from "inquirer";
async function welcome() {
    const usr_input = await inquirer.prompt([
        {
            type: "input",
            name: "userId",
            message: "enter usere id",
        },
        {
            type: "password",
            name: "usrPin",
            message: "enter user Pin",
        }
    ]);
}
//welcome();
// async function data(){
//     await welcome();
//     const amount= await Math.floor(Math.random() *100000 +1);
//     console.log(amount);
// }
//data();
async function cash() {
    await welcome();
    var amount = await Math.floor(Math.random() * 100000 + 1);
    console.log(amount);
    var money = await inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "select an options",
            choices: ["cash withdrawl", "exit"],
        },
    ]);
    if (money.options == "cash withdrawl") {
        console.log("your current amount is:", amount);
        var enterAmount = await inquirer.prompt([
            {
                type: "number",
                name: 'currrent_amount',
                message: "enter your amount",
            }
        ]);
        amount -= enterAmount.currrent_amount;
        console.log(enterAmount);
        console.log("Amount after withdrawl:", amount);
    }
}
await cash();
