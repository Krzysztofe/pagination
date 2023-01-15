import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./redux/features/apiSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  
        <App />
  
  </React.StrictMode>
);
