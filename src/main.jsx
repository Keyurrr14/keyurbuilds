import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Kshitij from "./pages/Kshitij";
import KshitijTicketing from "./pages/KshitijTicketing";
import Tedx from "./pages/Tedx";
import AutoLink from "./pages/AutoLink";
import MoronMedia from "./pages/MoronMedia";
import Squarefoot from "./pages/Squarefoot";
import SplitEasy from "./pages/SplitEasy";
import MCC from "./pages/MCC";
import Components from "./pages/Components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kshitij" element={<Kshitij />} />
          <Route path="/kshitij-ticketing" element={<KshitijTicketing />} />
          <Route path="/tedx" element={<Tedx />} />
          <Route path="/autolink" element={<AutoLink />} />
          <Route path="/moronmedia" element={<MoronMedia />} />
          <Route path="/squarefoot" element={<Squarefoot />} />
          <Route path="/spliteasy" element={<SplitEasy />} />
          <Route path="/mcc" element={<MCC />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
