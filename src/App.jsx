import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ProjectDetail from './components/ProjectDetail';
import Lighttheme from './pages/Lighttheme';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from / to /portfolio */}
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<Lighttheme />} />
      </Routes>
    </Router>
  );
}

export default App;
