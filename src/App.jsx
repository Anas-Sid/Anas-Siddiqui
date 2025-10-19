import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectDetail from './Light_theme_Component/ProjectDetail';

import Lighttheme from './pages/Lighttheme';

function App() {
  return (
    <Router>
      <Routes>
         
       
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/" element={<Lighttheme />} />
      </Routes>
    </Router>
  );
}

export default App;