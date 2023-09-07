import chalk from "chalk";
import { question, questionEMail } from "readline-sync";
import bcrypt from "bcrypt";
import fs from "fs/promises";

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

    let username = question("Enter your username :");
    while (!username) {
      username = question("Enter your username :");
    }
    let email = questionEMail("Enter your Email : ");
    while (!email) {
      email = questionEMail("Enter your Email : ");
    }
    let phone = question("Enter Your Phone : ");
    while (!phone) {
      phone = question("Enter Your Phone : ");
    }
    let address = question("Enter Your Address : ");
    while (!address) {
      address = question("Enter Your Address : ");
    }
    let password = question("Enter Your Password : ", { hideEchoBack: true });
    let confirmpassword = question("Enter Your Password again : ", {
      hideEchoBack: true,
    });
    while (password !== confirmpassword) {
      password = question("Enter Your Password : ", { hideEchoBack: true });
      confirmpassword = question("Enter Your Password again : ", {
        hideEchoBack: true,
      });
    }
    password = await bcrypt.hash(password, 12);

    let userData = { username, email, phone, address, password, todo: [] };

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let found = data.find((ele) => ele.email === email);
    if (found) {
      throw chalk.redBright("User Already Registered");
    }
    data.push(userData);
    await fs.writeFile("data.json", JSON.stringify(data));
    console.log("User Registered Successfully");
  } catch (error) {
    console.log(error);
  }
}

export default registerUser;
