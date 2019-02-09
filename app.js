const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
//my modulues
const notes = require("./notes");

const titleObj = {
  describe: "Title of note",
  //have to provide a title when using add command
  demand: true,
  //shortcut
  alias: "t"
};

const bodyObj = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleObj,
    body: bodyObj
  })
  .command("list", "List all notes")
  .command("read", "read a note", {
    title: titleObj
  })
  .command("remove", "Remove a note", {
    title: titleObj
  })
  .help().argv;
const command = argv._[0];

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note wasn't created");
  }
} else if (command === "list") {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
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
