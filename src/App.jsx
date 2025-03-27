import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Instructions from './pages/Instructions/Instructions';
import Survey from './pages/Questions/Survey';


function App() {
  return (
    <div>
      {/* Conditionally render InstructionsPage or other components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
