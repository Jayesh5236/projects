import chalk from "chalk";
import loading from "../utils/loading.js";
import { question, questionInt } from "readline-sync";
import { setTimeout } from "timers/promises";
import createTodo from "./createTodo.js";
import viewTodo from "./viewTodo.js";
import editTodo from "./editTodo.js";

async function loggedIn(email) {
  try {
    console.clear();
    console.log(
      chalk.green("*************************************************")
    );
    console.log("\t\t User Todo \t\t");
    console.log(
      chalk.green("*************************************************")
    );

    const options = [
      "Exit The Program",
      "Create Todo",
      "View Todo",
      "Edit Todo",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });
    const option = questionInt("Enter Your Choice : ");
    if (option < 0 || option >= options.length) {
      let spinner = loading(chalk.bgGreenBright("Enter Valid Input : "));
      await setTimeout(3000);
      spinner.stop(true);
      return loggedIn(email);
    }
    switch (option) {
      case 0:
        console.log("Exit The Program ");
        return;
      case 1:
        // console.log("Create Todo ");
        await createTodo(email);
        break;
      case 2:
        // console.log("View Todo");
        await viewTodo(email);

        break;
      case 3:
        // console.log("Edit Todo");
        await editTodo(email);
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
      return loggedIn(email);
    } else {
      console.log(chalk.bgRedBright("Thank you For USing CLI Application"));
    }
  } catch (error) {
    console.log(error);
  }
}

export default loggedIn;
