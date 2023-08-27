import chalk from "chalk";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import { question, questionEMail } from "readline-sync";
import loggedIn from "../todo/index.js";
import axios from "axios";

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
    let userData = {
      email,
      password,
    };
    let res = await axios.post("http://172.22.51.89:5004/api/login", userData);
    // console.log(res.data);
    await fs.writeFile("secret.txt", res.data.token);
    // await loggedIn(email);
  } catch (error) {
    console.log(error.response.data.error);
  }
}
export default loginUser;
