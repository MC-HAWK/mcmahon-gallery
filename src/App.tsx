import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Miscellaneous from './pages/Miscellaneous';
import Pre2000 from './pages/Pre2000';
import About from './pages/About';
import Contact from './pages/Contact';
import Post2000 from './pages/Post2000';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Navbar />
        <Layout>
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post2000" element={<Post2000 />} />
              <Route path="/pre2000" element={<Pre2000 />} />
              <Route path="/miscellaneous" element={<Miscellaneous />} />
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