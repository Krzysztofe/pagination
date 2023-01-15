import "../src/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./redux/features/apiSlice";
import InputID from "./pages/inputId/InputID";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="yy" element={<InputID />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
