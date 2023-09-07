import chalk, { Chalk } from "chalk";
import { question } from "readline-sync";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import loggedIn from "../Todo/index.js";

async function loginUser() {
  try {
    console.clear();
    console.log(`
        ====================================\n
        \tUser Login\n 
        ====================================`);

    let email = question("Enter Your Email : ");
    let password = question("Enter Your Password : ", { hideEchoBack: true });

    while (!password) {
      password = question("Enter Your Password : ", { hideEchoBack: true });
    }

    let data = await fs.readFile("data.json")
    data=JSON.parse(data)

    let emailFound =data.find(ele=>ele.email==email)
    if (!emailFound){
        throw chalk.redBright("User Not Found /Wrong Email ")
    }

    let passwordFound=await bcrypt.compare(password,emailFound.password)
    if (!passwordFound){
        throw chalk.redBright("Password Doesnt Match")
    }

    await loggedIn(email)
  } catch (error) {
    console.log(error);
  }
}

export default loginUser