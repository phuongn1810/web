import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
export default function Labs() {
  return (
    <div className="container">

      <h1>Phuong Nguyen</h1>
      <h1>Labs</h1>
        
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
      </Routes>
    </div>
  );
}

