import bcrypt from "bcrypt";
import chalk from "chalk";
import { question } from "readline-sync";
import fs from "fs/promises";

async function deleteUser() {
  try {
    console.clear();
    console.log(`
    ====================================\n
    \tUser Delete\n 
    ====================================`);

    let email = question("Enter Your Email : ");
    let password = question("Enter Your Password : ",{hideEchoBack:true});
    while (!password) {
      password = question("Enter Your Password : ",{hideEchoBack:true});
    }

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let emailFound = await data.find((ele) => ele.email == email);
    if (!emailFound) {
      throw chalk.redBright("User Not Found / Wrong Email ");
      return;
    }
    let passwordFound = bcrypt.compare(password, emailFound.password);
    if (!passwordFound) {
      throw chalk.redBright("User not found / wrong email");
    }


    let userIndex =await data.findIndex(ele =>ele.email ==email)

    data.splice(userIndex,1)
    await fs.writeFile("data.json",JSON.stringify(data))
    console.log("USer Deleted SuccessFully  ");
  } catch (error) {
    console.log(error);
  }
}
export default deleteUser