import React, { createContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create the provider component
const UserContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <UserContext.Provider value={{ characters, setCharacters }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
