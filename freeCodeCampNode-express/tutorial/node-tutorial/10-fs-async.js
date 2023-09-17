import fs from "fs";

let data = await fs.readFile("first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = fs.writeFile("first.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  console.log(result);
});

//by adding utf-8  we got the values before it we are geeting a buffer
