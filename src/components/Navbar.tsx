import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(true); // for mobile accordion, expanded by default
  const [galleryDropdown, setGalleryDropdown] = useState(false); // for desktop dropdown
  const [post2000Open, setPost2000Open] = useState(true); // for mobile, expanded by default
  const [pre2000Open, setPre2000Open] = useState(true); // for mobile, expanded by default
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
                className="absolute left-0 mt-2 w-64 bg-white text-black border border-gray-200 shadow-lg rounded z-50"
                style={{ minWidth: '16rem' }}
              >
                {/* PRE 2000 Section */}
                <div className="border-b border-gray-100">
                  <div className="px-4 py-2 font-semibold text-black uppercase text-sm tracking-wider bg-gray-50">PRE 2000</div>
                  <Link to="/pre2000-photographs" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>PHOTOGRAPHS</Link>
                  <Link to="/pre2000-drawings" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>DRAWINGS</Link>
                  <Link to="/pre2000-paintings" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>PAINTINGS</Link>
                  <Link to="/pre2000-unstretched-paintings" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>UNSTRETCHED PAINTINGS</Link>
                </div>
                {/* POST 2000 Section */}
                <div>
                  <div className="px-4 py-2 font-semibold text-black uppercase text-sm tracking-wider bg-gray-50">POST 2000</div>
                  <Link to="/post2000-photographs" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>PHOTOGRAPHS</Link>
                  <Link to="/post2000-drawings" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>DRAWINGS</Link>
                  <Link to="/post2000-paintings" className="block px-6 py-2 text-black uppercase text-sm tracking-wider hover:bg-gray-100 hover:text-gray-600" onClick={() => setGalleryDropdown(false)}>PAINTINGS</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">About</Link>
          <Link to="/contact" className="uppercase text-sm tracking-wider text-black hover:text-gray-600">Contact</Link>
        </div>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => { setMenuOpen(!menuOpen); if (!menuOpen) { setGalleryOpen(true); setPost2000Open(true); setPre2000Open(true); } }} className="bg-white text-black-600 focus:outline-none border border-black-300 rounded p-1">
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
              {/* PRE 2000 Mobile Section */}
              <button
                className="w-full text-left py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600 flex items-center bg-transparent rounded-none m-0 p-0"
                onClick={() => setPre2000Open((open) => !open)}
              >
                PRE 2000
              </button>
              {pre2000Open && (
                <div className="pl-4">
                  <Link to="/pre2000-photographs" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>PHOTOGRAPHS</Link>
                  <Link to="/pre2000-drawings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>DRAWINGS</Link>
                  <Link to="/pre2000-paintings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>PAINTINGS</Link>
                  <Link to="/pre2000-unstretched-paintings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>UNSTRETCHED PAINTINGS</Link>
                </div>
              )}
              {/* POST 2000 Mobile Section */}
              <button
                className="w-full text-left py-2 uppercase text-sm tracking-wider text-black hover:text-gray-600 flex items-center bg-transparent rounded-none m-0 p-0"
                onClick={() => setPost2000Open((open) => !open)}
              >
                POST 2000
              </button>
              {post2000Open && (
                <div className="pl-4">
                  <Link to="/post2000-photographs" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>PHOTOGRAPHS</Link>
                  <Link to="/post2000-drawings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>DRAWINGS</Link>
                  <Link to="/post2000-paintings" className="block py-2 text-sm text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>PAINTINGS</Link>
                </div>
              )}
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