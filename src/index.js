import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pro_tailwind.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/landing" element={<Landing />} />

      <Route path="*" element={<Navigate to="/landing" />} />
   
    </Routes>
  </BrowserRouter>
);
