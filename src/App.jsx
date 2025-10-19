import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FullPortfolio from './pages/FullPortfolio';


import ProjectDetail from './components/ProjectDetail';;
import Lighttheme from './pages/Lighttheme';

function App() {
  return (
    <Router>
      <Routes>

        {/* <Route path="/LPortfolio" element={<FullPortfolio />} /> */}
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<Lighttheme />} />
      </Routes>
    </Router>
  );
}

export default App;
