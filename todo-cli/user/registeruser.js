import bcrypt from "bcrypt";
import chalk from "chalk";
import fs from "fs/promises";
import { question, questionEMail } from "readline-sync";

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

    let username = question("Enter Your Username : ");
    while (!username) {
      username = question("Enter Your Username : ");
    }
    let email = questionEMail("Enter Your Email : ");
    while (!email) {
      email = questionEMail("Enter Your Email : ");
    }
    let phone = question("Enter Your Mobile Number : ");
    while (!phone) {
      phone = question("Enter Your Mobile Number : ");
    }
    let address = question("Enter Your City : ");
    while (!address) {
      address = question("Enter Your City : ");
    }
    let password = question("Enter Your PassWord : ", { hideEchoBack: true });
    let confirmPassword = question("Enter Your Passwrod Again : ", {
      hideEchoBack: true,
    });
    while (password !== confirmPassword) {
      console.log("Password Doesn`t Match ,Please Try Again  ");
      password = question("Enter Your PassWord : ", { hideEchoBack: true });
      confirmPassword = question("Enter Your Passwrod Again : ", {
        hideEchoBack: true,
      });
    }
    password = await bcrypt.hash(password, 12);

    let userData = {
      username,
      email,
      phone,
      address,
      password,
      todo: [],
    };

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let found = (await data).find((ele) => ele.email == email);
    if (found) {
      throw chalk.bgGreen("User Already Registered");
    }
    data.push(userData);
    await fs.writeFile("data.json", JSON.stringify(data));
    console.log("SuccessFully Registered User ");
  } catch (error) {
    console.log(error);
  }
}

export default registerUser;
