import "../src/css/App.css";
import Home from "../src/pages/home/homeMain/Home";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { productsApi } from "./redux/features/apiSlice";


function App() {
  return (

    <Provider store={store}>
      {/* <ApiProvider api={productsApi}> */}
        <div className="App">
          <Home />
        </div>
     {/* </ApiProvider> */}
   </Provider> 

  );
}

export default App;
