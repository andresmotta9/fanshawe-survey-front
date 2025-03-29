import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Instructions from "./pages/Instructions/Instructions";
import Survey from "./pages/Questions/Survey";
import Results from "./pages/Results";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      {/* Conditionally render InstructionsPage or other components */}
      
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      
    </div>
  );
}

export default App;
