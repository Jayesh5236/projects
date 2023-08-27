import chalk from "chalk";
import { question, questionInt } from "readline-sync";
import fs from "fs/promises";

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

        let fileData = await fs.readFile("data.json")
        fileData=JSON.parse(fileData)

        let userFound= await fileData.find(ele =>ele.email ==email)

        let taskId=question("Enter Your Unique TaskID : ")
        let taskFound=userFound.todo.find(ele=>ele.taskID ==taskId)

        if(!taskFound){
            console.log("The Task Was Not Found");
            return
        }
        let option =question("Enter 1 To Change Task Name ,Enter 2 To Change Status Of task")
        if(option==1){
            let newTaskName=question("Enter New Name Of Task : ")
            taskFound.name =newTaskName
        }
        else if (option==2){
            let confirmation =question("Enter Y/yes For Completion Of Task : ")
            if(confirmation == "Y" || confirmation == "yes" || confirmation == "YES" || confirmation == "y"){
                taskFound.isCompleted =true
            }
        }else{
            console.log("Wrong Input ");
            return
        }
        await fs.writeFile("data.json",JSON.stringify(fileData))
        console.log(chalk.greenBright("Task Edited Successfully "));
  } catch (error) {
    console.log(error);
  }
}
export default editTodo