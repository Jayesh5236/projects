import fs from "fs/promises"

let data = await fs.readFile("first.txt","utf-8")


fs.writeFile("first.txt","Here Is the result : ")
console.log(data);