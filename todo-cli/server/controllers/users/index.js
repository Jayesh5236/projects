import express from "express";
import bcrypt from "bcrypt";
import fs from "fs/promises";
// import jwt from "jsonwebtoken";
// import authMiddleware from "../../middleware/auth/verifytoken.js";
import {
  userRegistrationValidation,
  errorMiddleware,
} from "../../middleware/validations/index.js";

const router = express.Router();

router.post(
  "/register",
  userRegistrationValidation(),
  errorMiddleware,
  async (req, res) => {
    try {
      let { username, email, password, phone, address, confirmPassword } =
        req.body;

      if (password !== confirmPassword) {
        return res.status(400).json({ error: "passwords don't match" });
      }
      password = await bcrypt.hash(password, 12);

      let data = await fs.readFile("data.json");
      data = JSON.parse(data);

      let userData = {
        username,
        email, // has to be unique
        password,
        phone,
        address,
        todo: [],
      };

      let found = data.find((ele) => ele.email == email);
      if (found) {
        return res.status(400).json({ error: "User already exists" });
      }
      data.push(userData);
      await fs.writeFile("data.json", JSON.stringify(data));

      res.status(200).json({ success: "User registered" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

export default router;
