console.log("Starting notes.js");

const fs = require("fs");

const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};
const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log(
      "You already have a note by that name. Use a different name for your note."
    );
  }
};
const getAll = () => {
  return fetchNotes();
};
const getNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};
const removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  //compare the two arrays to check if a note was removed
  return notes.length !== filteredNotes.length;
};
const logNote = note => {
  debugger;
  console.log("----------------------");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
