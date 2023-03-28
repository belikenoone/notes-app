import { createContext, useReducer, useEffect, useState } from "react";
const AppContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      state;
      break;
  }
};
export const AppContextProvider = ({ children }) => {
  const initialState = {
    notes: JSON.parse(localStorage.getItem("updated-notes")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addNote = (text) => {
    dispatch({ type: "ADD_NOTE", payload: text });
  };

  const deleteNote = (noteId) => {
    dispatch({ type: "DELETE_NOTE", payload: noteId });
  };

  useEffect(() => {
    localStorage.setItem("updated-notes", JSON.stringify(state.notes));
  }, [state.notes]);
  return (
    <AppContext.Provider
      value={{
        addNote,
        notes: state.notes,
        deleteNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
