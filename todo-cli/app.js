import { question, questionInt } from "readline-sync";
import loading from "./user/utils/loading.js";
import { setTimeout } from "timers/promises";
import chalk from "chalk";
import registerUser from "./user/registeruser.js";
import loginUser from "./user/loginuser.js";
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
      "Login user",
      "Delete User",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i + 1} to ${ele}`);
    });
    const option = questionInt(
      "Enter Your Choice With The help Of Above Menu : "
    );
    if (option < 0 || option > options.length) {
      let spinner = loading("Invalid Input ,Please Try Again");
      await setTimeout(3500);
      spinner.stop(true);
      return main();
    }

    switch (option) {
      case 1:
        console.log("Exiting ,Bye ");
        return;
      case 2:
        await registerUser();
        // console.log("User Registration ");
        break;
      case 3:
        // console.log("Login User ");
      await loginUser()
        break;
      case 4:
        await deleteUser()
        // console.log("Delete User");
        break;
    }
    let willContinue = question("Do You Wish To Continue ? (Y/N)");
    if (
      willContinue == "y" ||
      willContinue == "yes" ||
      willContinue == "Y" ||
      willContinue == "YES"
    ) {
      let spinner = loading("Redirecting To Main Menu : ");
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    } else {
      console.log(
        chalk.bold.redBright("Thank You For Using The Cli ,Exiting Bye")
      );
    }
  } catch (error) {
    console.log(error);
  }
}
main();
