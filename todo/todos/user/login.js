import { question } from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";
import bcrypt from "bcrypt"
import loggedIn from "../todo/loggedIn.js";
async function loginUser() {
  try {
    let email = question("Enter your Email : ");
    while (!email) {
      email = question("Enter your Email : ");
    }
    let password = question("Enter Your Pasword : ",{hideEchoBack:true});
    while (!password) {
      password = question("Enter Your Pasword : ",{hideEchoBack:true});
    }
    let data = await fs.readFile("data.json");
    data = JSON.parse(data);
    let userFound = data.find((ele) => ele.email == email);
    if (!userFound) {
      throw chalk.greenBright("User Not Found");
    }
    let passwordFound = await bcrypt.compare(password, userFound.password);
    if (!passwordFound) throw chalk.bgGray("Password is Incorrect,Try again ");

    await loggedIn(email);
  } catch (error) {
    console.log(error);
  }
}
export default loginUser;
