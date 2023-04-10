import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as HoohTenan } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HoohTenan>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HoohTenan>
);
