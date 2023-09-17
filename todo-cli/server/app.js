import express from "express";
import userRouter from "./controllers/users/index.js";
// import todoRouter from "./controllers/todos/index.js"
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
  res.status(200).json({ success: "Welcome to the backend" });
});

app.use("/api/user", userRouter);
app.listen(5001, () => {
  console.log("Server Started At :", 5001);
});
