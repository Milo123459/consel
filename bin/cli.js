#!/usr/bin/env node
/**
 * Welcome to consel's cli code.
 * This is a client built off of child_process 
 */
const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const cp = require("child_process");
if (process.argv[2]) {
  if (
    ["-u", "-update", "--u", "--update"].includes(process.argv[2].toLowerCase())
  ) {
    var ProgressBar = require("progress");

    var bar = new ProgressBar(
      `${chalk.redBright(`:current/:total`)} ${chalk.blue("|")} ${chalk.cyan(
        ":elapsed seconds elapsed"
      )} ${chalk.blue("|")} ${chalk.greenBright(`:bar`)} ${chalk.blue("|")} ${chalk.red(':eta estimated seconds remaining')}`,
      {
        total: 20,
        complete: "+",
        incomplete: "-",
      }
    );
    var timer = setInterval(function () {
      bar.tick();

      if (bar.complete) {
        console.log(`${chalk.greenBright(`Updated!`)}`);
        clearInterval(timer);
        process.exit(process.pid);
      }
    }, 100);
    cp.execSync("npm i -g consel");
  }
}
console.log(
  chalk.blueBright(
    `Welcome to ${chalk.underline(chalk.bold(chalk.green(`consel`)))}. ${chalk.cyan(`Running on node-version ${process.version}`)}. ${chalk.magenta(chalk.bold(chalk.underline("CWD:")))} ${chalk.redBright(process.cwd())}`
  )
);
rl.on("line", async (line) => {
  try {
    console.log(`${chalk.gray(line)} ${chalk.blue(Date.now())}`);
    let executed = cp.execSync(line).toString();
    let newA = [];
    executed.split(/\n/g).map((c) => newA.push(c));
    newA.pop();
    newA.map((f) => {
      if (["\n", "\u200b", ""].includes(f)) {
      } else {
        return console.log(`${chalk.bgRedBright(`RESULT!`)} ${f}`);
      }
    });
  } catch (err) {
    let newErr = [];
    err.message.split(/\n/g).map((c) => newErr.push(c));
    newErr.map((f) => {
      if (["\n", "\u200b", ""].includes(f)) {
      } else {
        return console.log(`${chalk.bgRedBright(`ERROR!`)} ${f}`);
      }
    });
  }
});
rl.on("close", () => {
  console.log(
    chalk.blueBright(
      `Thank you for using ${chalk.underline(
        chalk.bold(chalk.green(`consel`))
      )}.`
    )
  );
});
//Thanks for using consel (If you are reading this!)
