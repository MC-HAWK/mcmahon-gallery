import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import ExperimentalHome from './pages/ExperimentalHome';
import About from './pages/About';
import Contact from './pages/Contact';

// POST 2000 Galleries
import Post2000Photographs from './pages/Post2000Photographs';
import Post2000Drawings from './pages/Post2000Drawings';
import Post2000Paintings from './pages/Post2000Paintings';

// PRE 2000 Galleries
import Pre2000Photographs from './pages/Pre2000Photographs';
import Pre2000Drawings from './pages/Pre2000Drawings';
import Pre2000Paintings from './pages/Pre2000Paintings';
import Pre2000UnstretchedPaintings from './pages/Pre2000UnstretchedPaintings';

// CURRENT WORK Galleries
import CurrentWorkDrawings from './pages/CurrentWorkDrawings';
import CurrentWorkPaintings from './pages/CurrentWorkPaintings';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Navbar />
        <Layout>
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experimental" element={<ExperimentalHome />} />
              
              {/* POST 2000 Routes */}
              <Route path="/post2000-photographs" element={<Post2000Photographs />} />
              <Route path="/post2000-drawings" element={<Post2000Drawings />} />
              <Route path="/post2000-paintings" element={<Post2000Paintings />} />
              
              {/* PRE 2000 Routes */}
              <Route path="/pre2000-photographs" element={<Pre2000Photographs />} />
              <Route path="/pre2000-drawings" element={<Pre2000Drawings />} />
              <Route path="/pre2000-paintings" element={<Pre2000Paintings />} />
              <Route path="/pre2000-unstretched-paintings" element={<Pre2000UnstretchedPaintings />} />
              
              {/* CURRENT WORK Routes */}
              <Route path="/current-work-drawings" element={<CurrentWorkDrawings />} />
              <Route path="/current-work-paintings" element={<CurrentWorkPaintings />} />
              
              {/* Other Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </Router>
  );
}

export default App;