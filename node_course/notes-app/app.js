const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

// console.log(name);
// console.log(add(1, 2));

console.log(getNotes());
console.log(validator.isEmail("gmail@a.com"));
console.log(validator.isURL("www.google.com"));
console.log(chalk.blue("Hello World!"));
console.log(chalk.green("Success!"));
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
