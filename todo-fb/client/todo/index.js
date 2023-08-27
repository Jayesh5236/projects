import loading from "../user/utils/loading.js";
import chalk from "chalk";
import { setTimeout } from "timers/promises";
import readLineSync from "readline-sync";
import createTodo from "./createtodo.js";
import viewTodo from "./viewtodo.js";
import editTodo from "./editTodo.js";

async function loggedIn(email) {
  try {
    console.clear();
    console.log(
      chalk.green("*************************************************")
    );
    console.log("\t\t USER TODO  \t\t");
    console.log(
      chalk.green("*************************************************")
    );
    const options = [
      "Exit The Program",
      "Create A Todo",
      "View All Todo",
      "Edit Todo",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = readLineSync.questionInt("Enter The Choice Of Option : ");
    if (option < 0 || option >= options.length) {
      let spinner = loading("Invalid Input,Please Try Again ");
      await setTimeout(3000);
      spinner.stop(true);
      return loggedIn(email);
    }
    switch (option) {
      case 0:
        console.log("Exiting The Program ,Bye ");
        return;
      case 1:
        // console.log("Create todo");
        await createTodo(email);
        break;
      case 2:
        await viewTodo(email)
        // console.log("View Todo");
        break;
      case 3:
        // console.log("Edit A Todo");
        await editTodo(email)
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
      return loggedIn(email);
    } else {
      console.log(
        chalk.bgGreenBright(
          "Thank you for using our application, see you again!"
        )
      );
    }
  } catch (error) {
    console.log(error);
  }
}
export default loggedIn;
