import React from "react";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
