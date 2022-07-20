import React from "react";
import { Routes, Route } from "react-router-dom";
import FindingFalcone from "./pages/findingfalcone";
import SuccessPage from "./pages/SuccessPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<FindingFalcone />} />
      <Route path="/finding-falcone" element={<FindingFalcone />} />
      <Route path="/success-page" element={<SuccessPage />} />
    </Routes>
  );
};

export default RoutesComponent;
