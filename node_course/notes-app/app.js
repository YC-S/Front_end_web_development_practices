const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

const command = process.argv[2];
// console.log(name);
// console.log(add(1, 2));

// console.log(getNotes());
console.log(validator.isEmail("gmail@a.com"));
console.log(validator.isURL("www.google.com"));
console.log(chalk.blue("Hello World!"));
console.log(chalk.green("Success!"));
console.log(chalk.blue("Hello") + " World" + chalk.red("!"));
console.log(chalk.blue.bgRed("Hot"));
console.log(chalk.red.bold("Error!"));
console.log(chalk.blue("test"));

// console.log(process.argv[2]);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read the notes",
  handler: function () {
    console.log("Reading the notes.");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "Listing out all notes",
  handler: function () {
    console.log("Listing the notes.");
  },
});
// add, remove, read, list
// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv);
