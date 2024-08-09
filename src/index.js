import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
    <ParallaxProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
      </ParallaxProvider>
    </NextUIProvider>
  </React.StrictMode>
);
