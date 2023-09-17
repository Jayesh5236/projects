import express from "express";
import path from "path";

const app = express();

//Setup Static and middleware
app.use(
  express.static(
    "/home/jayesh5236/projects/freeCodeCampNode-express/tutorial/express-tutorial/public"
  )
);
//it is the file server should not change

// app.get("/", (req, res) => {
//   res.sendFile(path.join( `/home/jayesh5236/projects/freeCodeCampNode-express/tutorial/express-tutorial/navbar-app/index.html`));
// rather than sending html file differently we can send it in a static way
// adding to static
// });

app.all("*", (req, res) => {
  res.status(404).send("resource Not Found");
});

app.listen(5000, () => {
  console.log(`server Is running on port`, 5000);
});

//every project hasa 2 folder 
// FINAL is cmplete project 
//starter will be the work
