import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BrainStateSelection from "./components/BrainStateSelection";
import Home from "./pages/Home";

function AppWrap() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BrainStateSelection />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppWrap;
