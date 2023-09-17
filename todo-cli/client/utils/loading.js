import { Spinner } from "cli-spinner";
import chalk from "chalk";

function loading(msg) {
  let spinner = new Spinner(chalk.red(msg));
  spinner.setSpinnerString("|/-\\");
  spinner.start();
  return spinner;
}

export default loading;
