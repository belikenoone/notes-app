import React from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { AppContextProvider } from "./context/context";
const App = () => {
  return (
    <AppContextProvider>
      <div className="w-[90%] mx-auto py-9 flex flex-col gap-10">
        <h1 className="text-6xl sm:text-center text-white">Notes App</h1>
        <AddNote />
        <NoteList />
      </div>
    </AppContextProvider>
  );
};

export default App;
