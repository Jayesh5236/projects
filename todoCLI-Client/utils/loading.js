import { Spinner } from "cli-spinner";
import chalk from "chalk";

function loading(msg){
    let spinner=new Spinner(chalk.redBright(msg))
    spinner.setSpinnerString('|/-\\');
    spinner.start()
    return spinner
}

export default loading