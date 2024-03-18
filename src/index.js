import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ViewProvider } from "./context/viewContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>
);
