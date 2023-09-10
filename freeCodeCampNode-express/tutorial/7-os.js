//os Modules is used to interact with os module

import os from "os";

//info about the user
let data = os.userInfo();
// console.log(data);

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
