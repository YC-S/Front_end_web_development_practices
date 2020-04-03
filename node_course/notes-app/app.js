const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv[2];
// console.log(name);
// console.log(add(1, 2));

console.log(getNotes());
console.log(validator.isEmail("gmail@a.com"));
console.log(validator.isURL("www.google.com"));
console.log(chalk.blue("Hello World!"));
console.log(chalk.green("Success!"));
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(chalk.blue.bgRed("Hot"));
console.log(chalk.red.bold("Error!"));
console.log(chalk.blue("test"));

console.log(process.argv[2]);
console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
