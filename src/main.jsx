import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Orcamento from "./Orcamento";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>
  </BrowserRouter>
);