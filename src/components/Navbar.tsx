import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(true); // for mobile accordion, expanded by default
  const [galleryDropdown, setGalleryDropdown] = useState(false); // for desktop dropdown
  const galleryDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        galleryDropdownRef.current &&
        !galleryDropdownRef.current.contains(event.target as Node)
      ) {
        setGalleryDropdown(false);
      }
    }
    if (galleryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [galleryDropdown]);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white border-b border-gray-100 z-50">
      <div className="flex justify-between items-center h-20 w-full max-w-full px-4 md:px-8">
        <Link to="/" className="font-bold text-lg tracking-widest uppercase text-black hover:text-gray-600 no-underline">Ken McMahon</Link>
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="relative" ref={galleryDropdownRef}>
            <button
              className="uppercase text-sm tracking-wider text-black hover:text-gray-600 flex items-center gap-1 bg-transparent border-none p-0 m-0 focus:outline-none"
              onClick={() => setGalleryDropdown((open) => !open)}
            >
              ART WORK
            </button>
            {galleryDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black border border-gray-200 shadow-lg rounded z-50"
                style={{ minWidth: '12rem' }}
              >
                <Link to="/post2000" className="block px-4 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>POST 2000</Link>
                <Link to="/pre2000" className="block px-4 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>PRE 2000</Link>
                <Link to="/unstretched-paintings" className="block px-4 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>UNSTRETCHED PAINTINGS</Link>
                <Link to="/miscellaneous" className="block px-4 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>MISCELLANEOUS</Link>
              </div>
            )}
          </div>
          <Link to="/about" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">About</Link>
          <Link to="/contact" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">Contact</Link>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => { setMenuOpen(!menuOpen); if (!menuOpen) setGalleryOpen(true); }} className="bg-white text-black-600 focus:outline-none border border-black-300 rounded p-1">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {/* Gallery accordion */}
          <button
            className="w-full text-left py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600 flex items-center bg-transparent rounded-none m-0 p-0"
            onClick={() => setGalleryOpen((open) => !open)}
          >
            ART WORK
          </button>
          {galleryOpen && (
            <div className="pl-4">
              <Link to="/post2000" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>POST 2000</Link>
              <Link to="/pre2000" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>PRE 2000</Link>
              <Link to="/unstretched-paintings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>UNSTRETCHED PAINTINGS</Link>
              <Link to="/miscellaneous" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>MISCELLANEOUS</Link>
            </div>
          )}
          <Link to="/about" className="block py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 