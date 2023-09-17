import randomStringGenerator from "../user/utils/randomString.js";
import { question } from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";

/*
{
    name,
    isCompleted,
    taskId
}
*/
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
    let todoName = question("Enter The Name Of Todo Task : ");
    while (!todoName) {
      todoName = question("Enter The Name Of Todo Task : ");
    }

    let todoData = {
      name: todoName,
      isCompleted: false,
      taskID: randomStringGenerator(8),
    };
    userFound.todo.push(todoData)
    await fs.writeFile("data.json",JSON.stringify(fileData))
    console.log("SuccessFully Created A Todo Task ");
  } catch (error) {
    console.log(error);
  }
}
export default createTodo