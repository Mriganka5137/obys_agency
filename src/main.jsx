import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import LocomotiveScrollProvider from "./components/LocomotiveScrollProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LocomotiveScrollProvider> */}
    <App />
    {/* </LocomotiveScrollProvider> */}
  </React.StrictMode>
);
