import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store";
import App from "./App.jsx";
import "./assets/sass/style.react.scss";
import "./assets/fonticon/fonticon.css";
import "./assets/keenicons/duotone/style.css";
import "./assets/keenicons/outline/style.css";
import "./assets/keenicons/solid/style.css";
import "./assets/sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
