import loginUser from "./todos/user/login.js";
import axios from "axios";
import chalk from "chalk";
import { setTimeout } from "timers/promises";
import loading from "./todos/user/utils/loading.js";
import { question, questionInt } from "readline-sync";
import registerUser from "./todos/user/register.js";
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
      "Login User",
      "Delete User",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = questionInt("Enter The Option Of your Choice : ");
    if (option < 0 || option > options.length) {
      let spinner = loading("Invalid Input,Please Try Again");
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    }
    switch (option) {
      case 0:
        console.log("Exit The Program ");
        return;
      case 1:
        // console.log("User Registration");
        await registerUser()
        break;
      case 2:
        // console.log("Login User");
        await loginUser()
        break;
      case 3:
        console.log("Delete User");
        break;
    }
    let willContinue =question("Do you Wish To Continue / (Y/N)")
    if (willContinue == "y" ||
    willContinue == "yes" ||
    willContinue == "Yes" ||
    willContinue == "Y" 
    ){
        let spinner = loading ("Redirecting To Main MenU")
        await setTimeout(3000)
        spinner.stop(true)
        return main ()

    }else{
        console.log(chalk.bgRedBright("Thank You For Using Our App : "));
    }
  } catch (error) {
    console.log(error);
  }
}
main()