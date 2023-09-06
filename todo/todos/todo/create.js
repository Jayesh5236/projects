/*
{
    name,
    isCompleted,
    taskId
} we need to push it to the todo of data.json
*/
import chalk from "chalk";
import randomStringGenerator from "../user/utils/random.js";
import fs from "fs/promises";
import { question } from "readline-sync";

async function createTodo(email) {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \t Create TODO\n 
    ====================================`);
    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let foundUser = data.find((ele) => ele.email == email);
    let todoName = question("Enter Your Todo Name : ");
    while (!todoName) {
      todoName = question("Enter Your Todo Name : ");
    }
    let todoData = {
      name: todoName,
      isCompleted: false,
      taskId: randomStringGenerator(6),
    };
    foundUser.todo.push(todoData);
    await fs.writeFile("data.json", JSON.stringify(data));
    console.log(chalk.bgGray("Task Added SuccessFully "));
  } catch (error) {
    console.log(error);
  }
}
export default createTodo;
