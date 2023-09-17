import express from "express";
import path from "path"
const app = express();

app.get("/", (req, res) => {
res.sendFile()

});

app.all("*", (req, res) => {
  res.status(404).send("resource not Found ");
});

app.listen(5000, () => {
  console.log(`Server Is running`, 5000);
});
