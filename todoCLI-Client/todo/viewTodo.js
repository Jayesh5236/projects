import chalk from "chalk";
import { question, questionInt } from "readline-sync";
import fs from "fs/promises";

async function viewTodo(email) {
  try {
    console.clear();
    console.log(`
        ====================================\n
        \t View TODOs\n 
        ====================================`);

    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let userFound = fileData.find((ele) => ele.email == email);

    userFound.todo.forEach((ele, i) => {
      console.log(`Todo Number : ${i + 1}`);
      console.log(`Todo Name : ${ele.name}`);
      console.log(
        `Todo Status : ${ele.isCompleted ? "Complete \n" : "Incomplete \n"}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
export default viewTodo;
