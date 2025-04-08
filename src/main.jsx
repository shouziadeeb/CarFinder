// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CarDetail from "./pages/CarDetail";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/car/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
