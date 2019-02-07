console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };
  try {
    const noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  } catch (e) {}

  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  } else {
    console.log(
      "You already have a note by that name. Use a different name for your note."
    );
  }
};
const getAll = () => {
  console.log("Getting all notes");
};
const getNote = title => {
  console.log("Getting note", title);
};
const removeNote = title => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
