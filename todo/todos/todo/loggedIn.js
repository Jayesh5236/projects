import { questionInt } from "readline-sync";
import chalk from "chalk"
import{ setTimeout }from "timers/promises"
import createTodo from "./create.js";
import loading from "../user/utils/loading.js"

async function loggedIn(email) {
    try {
      console.clear();
      console.log(
        chalk.green("*************************************************")
      );
      console.log("\t\t User Todo CLI \t\t");
      console.log(
        chalk.green("*************************************************")
      );
      const options = [
        "Exit The Program",
        "Create A Todo",
        "View Todos ",
        "Edit Todo",
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
        //   console.log("Create Todo");
          await createTodo(email)
          break;
        case 2:
          console.log("Get All Todos");
          
          break;
        case 3:
          console.log("Edit A Todo");
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
          return loggedIn(email)
  
      }else{
          console.log(chalk.bgRedBright("Thank You For Using Our App : "));
      }
    } catch (error) {
      console.log(error);
    }
  }


  export default loggedIn