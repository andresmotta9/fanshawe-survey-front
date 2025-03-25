import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Instructions from './pages/Instructions';
import { Survey } from './pages/Survey';

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
