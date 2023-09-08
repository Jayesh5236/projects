import axios from "axios";
import chalk from "chalk";
import fs from "fs/promises";

async function cityCo(city) {
  try {
    let data = await fs.readFile("cities.json");
    data = JSON.parse(data);

    let cityFound = data.find((ele) => ele.name == city);
    if (!cityFound) {
      console.log(chalk.bgCyanBright("City Not Found"));
    }

    await fs.writeFile("cities.json", JSON.stringify(data));
    console.log(
      chalk.magentaBright(
        `${cityFound} cordinates are \n latitudes : ${cityFound.lat} \n Longitude : ${cityFound.lng}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

async function liveC(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    const weatherData = response.data.main.temp - 273.15;
    console.log(
      chalk.magentaBright(
        `The Current Celsius Temp of ${city} is ${weatherData}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

async function liveF(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const weatherData = (response.data.main.temp - 273.15) * (9 / 5) + 32;
    console.log(
      chalk.magentaBright(
        `The Current Fahrenheit Temp of ${city} is ${weatherData}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

async function liveK(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const weatherData = response.data.main.temp;
    console.log(
      chalk.magentaBright(
        `The Current Kelvin Temp of ${city} is ${weatherData}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

async function minmax(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const minTemp = response.data.main.temp_min - 273.15;
    const maxTemp = response.data.main.temp_max - 273.15;

    console.log(
      chalk.magentaBright(
        `${city} has \n Minimum temp of ${minTemp} \n Maximum temp of ${maxTemp}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}
async function humidity(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const hum = response.data.main.humidity;
    console.log(chalk.magentaBright(`${city} has the Humidity of ${hum}`));
  } catch (error) {
    console.log(error);
  }
}
async function utcTime(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const timeutc = response.data.timezone;
    const currentUtc = new Date(Date.now() + timeutc * 1000);
    console.log(
      chalk.magentaBright(`${city} current UTC Time is ${currentUtc}`)
    );
  } catch (error) {
    console.log(error);
  }
}
async function sun(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const sunRise = response.data.sys.sunrise;
    const currentRise = new Date(sunRise * 1000);
    const sunSet = response.data.sys.sunset;
    const currentSet = new Date(sunSet * 1000);
    console.log(
      chalk.magentaBright(`${city} Sunrise and Sunset Time Is :\nSunRise Time is  ${currentRise}\nSunset Time Is ${currentSet}
      `)
    );
  } catch (error) {
    console.log(error);
  }
}
async function localTime(city) {
  try {
    const API_KEY = "7f6bc51a67914b00cf0a93e4580a8460";
    let response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const timezoneA = response.data.timezone;

    const currentUtc = new Date();
    const localTime = new Date(currentUtc.getTime() + timezoneA);

    console.log(
      chalk.magentaBright(
        `${city} Local Time: ${localTime.toLocaleTimeString()}`
      )
    );
  } catch (error) {
    console.log(error);
  }
}

export {
  cityCo,
  liveC,
  liveF,
  liveK,
  minmax,
  humidity,
  utcTime,
  sun,
  localTime,
};
