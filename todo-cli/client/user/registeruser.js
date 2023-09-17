import axios from "axios";
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
    // password = await bcrypt.hash(password, 12);

    let userData = {
      username,
      email,
      phone,
      password,
      confirmPassword,
      address,
      // todo: [],
    };
    let res = await axios.get(
      "http://172.22.51.89:5001/api/user/register",
      userData
    );
    console.log("SuccessFully Registered User ");
  } catch (error) {
    console.log(error);
  }
}

export default registerUser;
//  172.22.51.89
