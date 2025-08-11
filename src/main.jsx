import React from "react";
import ReactDOM from "react-dom/client";
import AppWrap from "./AppWrap";
import { BrainStateProvider } from "./context/BrainStateContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrainStateProvider>
      <AppWrap />
    </BrainStateProvider>
  </React.StrictMode>
);
