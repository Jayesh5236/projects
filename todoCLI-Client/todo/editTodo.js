import chalk from "chalk";
import fs from "fs/promises";
import { question, questionInt } from "readline-sync";

/*
{
    name,
    isCompleted,
    taskId
}
*/

async function editTodo(email) {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \t Edit TODO\n 
    ====================================`);

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let userFound = fileData.find((ele) => ele.email == email);

    let taskId = question("Enter Your Unique TaskID : ");
    let taskFound = userFound.todo.find((ele) => ele.taskId == taskId);
    while (!taskFound) {
      console.log("No task Found ");
      return;
    }

    let option = questionInt(
      "Enter 1 to change to Todo name and Enter 2 to Change the Todo Status "
    );
    if (option == 1) {
      let newTaskName = question("Enter New Todo NAme : ");
      taskFound.name = newTaskName;
    } else if (option == 2) {
      let confirmation = question(
        "Enter y/Yes to Change the status of the Todo : "
      );
      if (
        confirmation == "y" ||
        confirmation == "yes" ||
        confirmation == "YES" ||
        confirmation == "Y"
      ) {
        taskFound.isCompleted = true;
      }
    } else {
      console.log("Wrong Input ,Please Try Again");
      return;
    }

    await fs.writeFile("data.json", JSON.stringify(fileData));
    console.log(chalk.bgBlueBright("Todo Task Edited SuccessFully "));
  } catch (error) {
    console.log(error);
  }
}

export default editTodo