import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Detalhes from "./pages/Detalhes/detalhes.jsx";
import Home from "./pages/Home/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
           <Route path="/" element={<Home />}/> 
          <Route path="movie/:id" element={<Detalhes />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

