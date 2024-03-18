import React, { createContext, useState, useContext } from "react";

// Create the context
const ViewContext = createContext();

// Provider component
export const ViewProvider = ({ children }) => {
  const [alignment, setAlignment] = useState("horizontal"); // Default alignment

  return (
    <ViewContext.Provider value={{ alignment, setAlignment }}>
      {children}
    </ViewContext.Provider>
  );
};

// Custom hook to use the context
export const useView = () => useContext(ViewContext);
