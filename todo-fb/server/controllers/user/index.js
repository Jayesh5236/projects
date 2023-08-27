import express from "express";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import jwt from "jsonwebtoken";

const router =express.Router()


router.get("/register", (req, res) => {
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
  