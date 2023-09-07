import chalk from "chalk";
import loading from "./utils/loading.js";
import { question, questionInt } from "readline-sync";
import { setTimeout } from "timers/promises";
import registerUser from "./user/registeruser.js";
import deleteUser from "./user/deleteUser.js";

/* 

User Login
User Register
Delete User

*CRUD ( Create , Read , Update , Delete )
Insert Todo
View Todo's
Edit Todo
Delete Todo

*/

async function main() {
  try {
    console.clear();
    console.log(
      chalk.green("*************************************************")
    );
    console.log("\t\t TODO CLI \t\t");
    console.log(
      chalk.green("*************************************************")
    );

    const options = [
      "Exit The Program",
      "User Registration",
      "USer Login",
      "User Delete",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = questionInt("Enter Your Choice : ");
    if (option < 0 || option >= options.length) {
      let spinner = loading(chalk.bgGreenBright("Enter Valid Input : "));
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    }
    switch (option) {
      case 0:
        console.log("Exit The Program ");
        return;
      case 1:
        // console.log("User registration ");
        await registerUser();
        break;
      case 2:
        console.log("User Login ");

        break;
      case 3:
        // console.log("User Delete ");
        await deleteUser();
        break;
    }
    let willContinue = question("Do you want To continue ? (y/n)");
    if (
      willContinue == "y" ||
      willContinue == "Y" ||
      willContinue == "YES" ||
      willContinue == "yes"
    ) {
      let spinner = loading("Redirecting To The MEnu .........");
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    } else {
      console.log(chalk.bgRedBright("Thank you For USing CLI Application"));
    }
  } catch (error) {
    console.log(error);
  }
}

main();
