import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
