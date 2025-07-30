import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import ProjectDetail from './Component/ProjectDetail'; // (create this file next)


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <main className="h-full min-h-screen">
          

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:id" element={<ProjectDetail />} />
  <Route path="/contact" element={<Contact />} />
</Routes>


        </main>
      </div>
    </Router>
  );
}

export default App;
