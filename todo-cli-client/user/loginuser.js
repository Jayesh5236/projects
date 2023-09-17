import chalk from "chalk";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import { question, questionEMail } from "readline-sync";
import loggedIn from "../todo/index.js";

async function loginUser() {
  try {
    console.clear();
    console.log(`
        ====================================\n
        \tUser Login\n 
        ====================================`);
    let email = questionEMail("Enter Your Email : ");
    let password = question("Enter Your Password : ", { hideEchoBack: true });
    while (!password) {
      password = question("Enter Your Password : ", { hideEchoBack: true });
    }

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let emailFound = data.find((ele) => ele.email == email);
    if (!emailFound) {
      throw chalk.bold.bgYellowBright("User Not Found /Wrong Email ");
    }
    let passwordFound = await bcrypt.compare(password, emailFound.password);
    if (!passwordFound) {
      throw chalk.bgGreen("Incorrect Password,Try Again");
    }
    await loggedIn(email);
    return;
  } catch (error) {
    console.log(error);
  }
}
export default loginUser;
