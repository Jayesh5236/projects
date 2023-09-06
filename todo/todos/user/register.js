import bcrypt from "bcrypt";
import fs from "fs/promises";
import { question, questionEMail } from "readline-sync";
import chalk from "chalk";

/*

usernmae 
email 
phone 
address
password
confirm password
 
*/

async function registerUser() {
  try {
    console.clear();
    console.log(`
     ====================================\n
     \tUser Register\n 
    ====================================`);
    let userName = question("Enter Your Username : ");
    while (!userName) {
      userName = question("Enter Your Username : ");
    }
    let email = questionEMail("Enter Your Email Address : ");
    while (!email) {
      email = questionEMail("Enter Your Email Address : ");
    }
    let phone = question("Enter Your phone number : ");
    while (!phone) {
      phone = question("Enter Your phone number : ");
    }
    let address = question("Enter Your City Name : ");
    while (!address) {
      address = question("Enter Your City Name : ");
    }
    let password = question("Enter Your Password : ", { hideEchoBack: true });
    let confirmPassword = question("Enter Your Password again : ", {
      hideEchoBack: true,
    });
    while (password !== confirmPassword) {
      password = question("Enter Your Password : ", { hideEchoBack: true });
      confirmPassword = question("Enter Your Password again", {
        hideEchoBack: true,
      });
    }
    password = await bcrypt.hash(password, 12);

    const userData = {
      userName,
      email,
      phone,
      password,
      address,
      todo: [],
    };
    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let found =data.find((ele) => ele.email == email);
    if (found) {
      throw chalk.yellowBright("User Already Registered");
    }
    data.push(userData)
    await fs.writeFile("data.json",JSON.stringify(data))
    console.log("SuccessFully Registered ");
  } catch (error) {
    console.log(error);
  }
}
export default registerUser