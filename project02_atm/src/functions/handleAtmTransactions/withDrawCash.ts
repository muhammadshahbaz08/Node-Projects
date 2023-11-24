import inquirer from "inquirer";
import { User } from "../../interface/interface.js";
import chalk from "chalk";

export const WithDrawCash = async (user: User) => {
  const res = await inquirer.prompt({
    type: "number",
    message: "Enter Amount to With Draw :",
    name: "amountToWithDraw",
  });

  if (res.amountToWithDraw > user.balance) {
    console.log(
      chalk.red.bold(
        "Sorry , You Entered Amount Exceeds Your Account Balance !"
      )
    );
  } else if (res.amountToWithDraw < user.balance) {
    console.log(
      chalk.bgBlack.green.bold(`WithDrawn Amount : ${res.amountToWithDraw} `)
    );
    console.log(
      chalk.bgBlack.blue.bold(
        `Balance : ${(user.balance = user.balance - res.amountToWithDraw)}`
      )
    );
  }
};
