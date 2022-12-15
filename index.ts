#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


    const sleep =(ms = 2000)=> new Promise ((res, rej) => setTimeout(res ,ms))
        
    async function welcome(){
        const rainbowTitle = chalkAnimation.rainbow(`Let's start the Game!!`);//start
        await sleep();
        rainbowTitle.stop();
    }
    welcome();

    let playerLife = 3;

    async function askQues(){
        
        let randomNumber:number =Math.floor(Math.random()*10 + 1); 

       do{
        playerLife--;
        console.log(`player Life left ${playerLife}`)
        var ques = await inquirer
        .prompt([
            {
                type:"input",
                name:"guess_num",
                message:"select any number between 1-10: ",
                validate: (input) => {
                    if (isNaN(input)) {
                        return "Pleaee enter a number"
                    }
                    return true;
                }
            }
        ]);
        if ( ques.guess_num === randomNumber){
            console.log(chalk.green(`congratulation! You guess the right number`));
        }
        else if(ques.guess_num < randomNumber){
            console.log(chalk.red(`your number ${ques.guess_num} is less than guess number`));
        }
        else if(ques.guess_num > randomNumber){
            console.log(chalk.red(`your number ${ques.guess_num} is greater than guess number`));
        }
       }
       while(playerLife > 0 && randomNumber !== ques.guess_num);
        if(playerLife == 0 && randomNumber !== ques.guess_num){
            console.log(chalk.redBright(`Game Over!`))
        }
    }



    async function startAgain() {
    do{ 
        console.clear();
        await welcome();
        playerLife = 3;
        await askQues();
        var restart = await inquirer.prompt([
            {
                type:"input",
                name : "start_again",
                message:"Do you want to start Game ? press Y or N: "
            }
        ])
    }while(restart.start_again ==="Y" || restart.start_again ==="YES" || restart.start_again ==="yes" || restart.start_again ==="y" )
    }
    startAgain()