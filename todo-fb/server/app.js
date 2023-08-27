import express from "express";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
/*

User Signup - Public - POST
User Login - Public - POST

Private Routes :-
user deletion - DELETE
Create Task - POST
Edit Task - PUT/PATCH
Delete Task - DELETE
Read Task - GET
Read Tasks - GET

*/
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: "Welcome to backend" });
});
app.post("/api/register", async (req, res) => {
  try {
    let { username, email, phone, address, password, confirmPassword } =
      req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords Are Not matching" });
    }
    password = await bcrypt.hash(password, 12);
    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let userData = {
      username,
      email,
      phone,
      address,
      password,
      todo: [],
    };

    let found = (await data).find((ele) => ele.email == email);
    if (found) {
      return res.status(400).json({ error: "User Already Registered" });
    }
    data.push(userData);
    await fs.writeFile("data.json", JSON.stringify(data));
    console.log("SuccessFully Registered User ");

    res.status(200).json({ success: "User SuccessFully Registered" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal server error " });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let data = await fs.readFile("data.json");
    data = JSON.parse(data);

    let emailFound = data.find((ele) => ele.email == email);
    if (!emailFound) {
      return res.status(400).json({ error: "User Not Found /Wrong Email " });
    }
    let passwordFound = await bcrypt.compare(password, emailFound.password);
    if (!passwordFound) {
      return res.status(400).json({ error: "Incorrect Password,Try Again" });
    }

    const payload = { email: emailFound.email, username: emailFound.username };
    const privateKey = "TheHackiNgSChool";
    const token = jwt.sign(payload, privateKey, { expiresIn: "10h" });
    res.status(200).json({ success: "User Logged In SuccessFully ", token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
});

app.listen(5004, () => {
  console.log(`server started at :`, 5004);
});
