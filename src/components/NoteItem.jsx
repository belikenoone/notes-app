import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../context/context";
import { AiFillDelete } from "react-icons/ai";
const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(AppContext);
  const colorsArray = [
    "#DE1A1A",
    "#F39A9D",
    "#5E8C61",
    "#454955",
    "#736372",
    "#003F91",
    "#9000B3",
    "#F9627D",
    "#4A5899",
    "#E9CE2C",
    "#EB5160",
  ];
  const generateRandomColor = () => {
    let randomIndex = Math.floor(Math.random() * colorsArray.length);

    return colorsArray[randomIndex];
  };
  const [bgColor, setBgColor] = useState(generateRandomColor());

  return (
    <>
      <div
        className={`flex flex-col min-h-[192px]  py-6 justify-between px-3 rounded-md whitespace-pre-wrap break-words relative group`}
        style={{ backgroundColor: bgColor }}
      >
        <span className="font-bold text-3xl">{note.title}</span>
        <span>{note.content}</span>
        <small className=" font-bold">{note.date}</small>
        <div className="flex gap-4 absolute right-4 justify-center items-center">
          <motion.button
            onClick={() => deleteNote(note.id)}
            whileTap={{ scale: 0.5 }}
            className="transition-all scale-0 group-hover:scale-100"
          >
            <AiFillDelete color="white" />
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
