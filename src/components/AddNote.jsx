import { nanoid } from "nanoid";
import React, { useState, useContext } from "react";
import AppContext from "../context/context";
const AddNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [titleFieldFocus, setTitleFieldFocus] = useState(false);
  const [contentFieldFocus, setContentFieldFocus] = useState(false);
  const { addNote } = useContext(AppContext);
  const contentCharactersCount = 200;
  const titleCharactersCount = 20;

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const options = { hour12: false };
    const date =
      now.toLocaleDateString() + " ," + now.toLocaleTimeString([], options);
    const newNote = {
      id: nanoid(),
      title: noteTitle,
      content: noteContent,
      date: date,
    };
    if (noteTitle.trim().length <= 0 || noteContent.trim().length <= 0) {
      alert("You just cannot add whitespaces");
      return;
    }

    addNote(newNote);
    setNoteTitle("");
    setNoteContent("");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note Title"
        className="w-full py-2 px-3  rounded-md  "
        required
        maxLength={20}
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        onFocus={() => setTitleFieldFocus(true)}
        onBlur={() => setTitleFieldFocus(false)}
      />
      <textarea
        placeholder="Note Here.."
        className="w-full py-2 px-3  rounded-md  resize-none relative"
        cols={2}
        rows={4}
        required
        maxLength={200}
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        onFocus={() => setContentFieldFocus(true)}
        onBlur={() => setContentFieldFocus(false)}
      />

      <span
        className={`${
          titleFieldFocus ? "scale-100 " : "scale-0 "
        } transition-all text-white text-lg`}
      >
        Characters Remaining:{titleCharactersCount - noteTitle.length}
      </span>
      <span
        className={`${
          contentFieldFocus ? "scale-100" : "scale-0"
        } transition-all text-white text-lg`}
      >
        Characters Remaining:{contentCharactersCount - noteContent.length}
      </span>

      <button className="py-2 text-xl bg-[#8F43EE] ">Add Note</button>
    </form>
  );
};

export default AddNote;
