import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white border-b border-gray-100 z-50">
      <div className="flex justify-between items-center h-20 w-full max-w-full px-4 md:px-8">
        <Link to="/" className="font-bold text-lg tracking-widest uppercase text-black">Ken McMahon</Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/gallery" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">Gallery</Link>
          <Link to="/about" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">About</Link>
          <Link to="/contact" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/gallery" className="block py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/about" className="block py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 