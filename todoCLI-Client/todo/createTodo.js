import chalk from "chalk";
import { question } from "readline-sync";
import fs from "fs/promises";
import randomStringGenerator from "../utils/randomstring.js";

async function createTodo(email) {
  try {
    console.clear();
    console.log(`
        ====================================\n
        \t Create TODO\n 
        ====================================`);

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let userFound = fileData.find((ele) => ele.email == email);

    let todoName = question("Enter The Name Of Todo : ");

    let todoData = {
      name: todoName,
      isCompleted: false,
      taskId: randomStringGenerator(6),
    };

    userFound.todo.push(todoData);

    await fs.writeFile("data.json", JSON.stringify(fileData));

    console.log(chalk.bgMagentaBright("Created A Todo SuceessFully "));
  } catch (error) {
    console.log(error);
  }
}
export default createTodo;
