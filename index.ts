#! /usr/bin/env node

import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";

    console.log(chalk.yellowBright(figlet.textSync("ISLAM'S    ATM")));
    const input = await inquirer.prompt([
        {
            type:"number",
            name:"PinCode",
            message: "Please Enter pin code",
        },
        {
            type:"list",
            name:"question",
            message: "Choose your account type",
            choices:["current","Savings","Off-Shore"]
        },
        {
            type:"list",
            name:"question2",
            message: "What would you like to do?",
            choices:["Withdraw Cash","Check Balance","Exit"]
        },
         ]);

         if(input.question2==="Withdraw Cash")
         {
            const input2 = await inquirer.prompt([
                {
                    type:"list",
                    name:"amount",
                    message:"Please Select an amount",
                    choices:[1000,2000,5000,10000,20000,"Other"],
                },
                {
                    type:"list",
                    name:"receipt",
                    message:"Would you like a receipt of your transaction?",
                    choices:["yes","No"],
                },
            ]);
            if(input2.amount===1000||input2.amount===2000||input2.amount===5000||input2.amount===10000||input2.amount===20000)
            {
                console.log(chalk.magentaBright(`Please collect your cash amount: ${input2.amount}`));
                if(input2.receipt==="yes"){
                    console.log(`Please collect your transaction receipt and card.\n Thank you for using Islam's ATM.`);
                }
                
                else if(input2.receipt==="No"){
                    console.log(`Please collect your card. \nThank you for using Islam's ATM.`);
                }
            }
            else if(input2.amount==="Other")
            {
                const input3=await inquirer.prompt([
                    {
                        type:"number",
                        name:"custom_amount",
                        message:"Enter amount to withdraw",

                    }
                ]);
                              
                console.log(chalk.magentaBright(`Please collect your cash amount: ${input3.custom_amount}`));
                if(input2.receipt==="yes"){
                    console.log(`Please collect your transaction receipt and card. \n Thank you for using Islam's ATM.`);
                }
                
                else if(input2.receipt==="No"){
                    console.log(`Please collect your card. \n Thank you for using Islam's ATM.`);
                }
            }
        }
         
         else if(input.question2==="Check Balance")
         {
            console.log(chalk.bgRedBright(`Your balance is nill. You can increase it once you start to earn after learning.\n Thank you for using Islam's ATM.`));
           
         }
         else if(input.question2==="Exit")
         {
            console.log(`Please collect your card. Thank you for using Islam's ATM`);
         };
