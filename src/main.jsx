import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Kshitij from "./pages/Kshitij";
import Tedx from "./pages/Tedx";
import AutoLink from "./pages/AutoLink";
import MoronMedia from "./pages/MoronMedia";
import Squarefoot from "./pages/Squarefoot";
import SplitEasy from "./pages/SplitEasy";
import MCC from "./pages/MCC";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kshitij" element={<Kshitij />} />
        <Route path="/tedx" element={<Tedx />} />
        <Route path="/autolink" element={<AutoLink />} />
        <Route path="/moronmedia" element={<MoronMedia />} />
        <Route path="/squarefoot" element={<Squarefoot />} />
        <Route path="/spliteasy" element={<SplitEasy />} />
        <Route path="/mcc" element={<MCC />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
