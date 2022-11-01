import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "./fonts/Lato-Bold.ttf";
import "./fonts/Lato-Light.ttf";
import "./fonts/Lato-Regular.ttf";
import "./fonts/Lato-Thin.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// localStorage + title city name
