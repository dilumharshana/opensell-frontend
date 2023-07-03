import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import initializer from "./Services/initializer.js";

initializer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
