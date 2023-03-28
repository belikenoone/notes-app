import React, { useContext } from "react";
import AppContext from "../context/context";
import NoteItem from "./NoteItem";
import { motion, AnimatePresence } from "framer-motion";
const NoteList = () => {
  const { notes } = useContext(AppContext);

  return (
    <>
      <h2 className="text-2xl text-white font-semibold text-center md:text-left">
        Total Notes:{notes.length}
      </h2>
      {notes.length <= 0 ? (
        <span className="text-white text-center text-3xl">
          No Notes Yet...Add One
        </span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {notes.map((note) => (
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ scale: 0 }}
                key={note.id}
              >
                <NoteItem note={note} key={note.id} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default NoteList;
