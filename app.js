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
    notes.logNote(note);
  } else {
    console.log("Note wasn't created");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}
