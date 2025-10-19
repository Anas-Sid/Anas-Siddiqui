import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectDetail from './components/ProjectDetail';;
import Lighttheme from './pages/lighttheme';

function App() {
  return (
    <Router>
      <Routes>

        {/* <Route path="/LPortfolio" element={<FullPortfolio />} /> */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/portfolio" element={<Lighttheme />} />
      </Routes>
    </Router>
  );
}

export default App;
