import chalk from "chalk";
import axios from "axios";
import fs from "fs/promises";
import { question, questionInt } from "readline-sync";
import loading from "./utils/loading.js";
import { setTimeout } from "timers/promises";
import {
  cityCo,
  liveC,
  liveF,
  liveK,
  minmax,
  humidity,
  utcTime,
  sun,
  localTime,
} from "./functions.js";

async function main() {
  try {
    console.clear();
    console.log(
      chalk.green("*************************************************")
    );
    console.log("\t\t WEATHER CLI \t\t");
    console.log(
      chalk.green("*************************************************")
    );

    const options = [
      "Exit The Program",
      "City co-ordinates",
      "Live Temperature in Celsius ( \u2103  )",
      "Live Temperature in Fahrenheit ( \u2109  )",
      "Live Temperature in Kelvin ( \u212A )",
      "Min and Max Temp",
      "humidity",
      "UTC Time",
      "Display Sunrise and Sunset Time in UTC",
      "Local time",
    ];
    options.forEach((ele, i) => {
      console.log(`Enter ${i} to ${ele}`);
    });

    const option = questionInt("Enter Your Option From The Menu : ");
    if (option < 0 || option >= options.length) {
      let spinner = loading(chalk.bgGreenBright("Enter Valid Input: "));
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    }
    let city = question("Enter Your City Name : ");
    switch (option) {
      case 0:
        console.log("exiting The Program");
        return;

      case 1:
        // console.log("City co-ordinates");
        await cityCo(city);
        break;

      case 2:
        // console.log("Live Temperature in Celsius ( \u2103  )");
        await liveC(city);
        break;

      case 3:
        // console.log("Live Temperature in Fahrenheit ( \u2109  )");
        await liveF(city);
        break;

      case 4:
        // console.log("Live Temperature in Kelvin ( \u212A )");
        await liveK(city);
        break;

      case 5:
        // console.log("Min and Max Temp");
        await minmax(city);
        break;

      case 6:
        // console.log("humidity");
        await humidity(city);
        break;

      case 7:
        // console.log("UTC Time");
        await utcTime(city);
        break;

      case 8:
        // console.log("Display Sunrise and Sunset Time in UTC");
        await sun(city);
        break;

      case 9:
        // console.log("Local Time");
        await localTime(city);
        break;
    }
    let willContinue = question("Do you want To continue ? (y/n)");
    if (
      willContinue == "y" ||
      willContinue == "Y" ||
      willContinue == "YES" ||
      willContinue == "yes"
    ) {
      let spinner = loading("Redirecting To The MEnu .........");
      await setTimeout(3000);
      spinner.stop(true);
      return main();
    } else {
      console.log(
        chalk.bgRedBright("Thank you For USing Weather CLI Application")
      );
    }
  } catch (error) {
    console.log(error);
  }
}
main();
