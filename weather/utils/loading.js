import spinner, { Spinner } from "cli-spinner";
import chalk from "chalk";

function loading(msg) {
  let spinner = new Spinner(chalk.bgRedBright(msg));
  spinner.setSpinnerString("⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏");
  spinner.start();
  return spinner;
}

export default loading
