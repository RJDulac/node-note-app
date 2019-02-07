console.log("starting app.");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
//my modulues
const notes = require("./notes");

const argv = yargs.argv;
const command = argv._[0];
console.log("command", command);
console.log("Yargs", argv);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    console.log("----------------------");
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  } else {
    console.log("Note wasn't created");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
