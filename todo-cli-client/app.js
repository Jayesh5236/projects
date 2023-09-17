import loading from "./utils/loading.js";
import chalk from "chalk";
import readLineSync from "readline-sync";
import { setTimeout } from "timers/promises";
import registerUser from "./User/registerUser.js";
import loginUser from "./User/login.js";
import deleteUser from "./User/userDelete.js";


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
    console.clear()
    console.log(chalk.green("*************************************************"));
    console.log("\t\t TODO CLI \t\t");
    console.log(chalk.green("*************************************************"));
    const options = [
      "Exit The Program",
      "Create a User",
      "Login",
      "Delete Account",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = readLineSync.questionInt(
      "Enter your option from the above menu : "
    );
    if (option < 0 || option >= options.length) {
      let spinner = loading(
        "Invalid option. Please Try Again. Redirecting to Menu......"
      );
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    }
  
    switch (option) {
      case 0:
        console.log("Exiting. Bye");
        return
      case 1:
        await registerUser()
        // console.log("User Registration");
        break;
      case 2:
      await loginUser()
      // console.log("User Login");
        break;
      case 3:
        await deleteUser()
        break;
    }
  
    let willContinue = readLineSync.question("Do you want to continue? (Y/N)");
    if (
      willContinue == "y" ||
      willContinue == "Y" ||
      willContinue == "yes" ||
      willContinue == "Yes"
    ) {
      let spinner = loading("Redirecting to menu....");
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    } else {
      console.log(
        chalk.bgGreenBright("Thank you for using our application, see you again!")
      );
    }
 } catch (error) {
    console.log(error);
 }
}

main();
