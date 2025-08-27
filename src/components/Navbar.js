import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Moon, Sun, Menu, X } from 'react-feather';

function Navbar() {
  // Track which section is in view for scroll-based nav highlight
  const [scrolledNav, setScrolledNav] = useState('#home');

  useEffect(() => {
    // Section IDs in order
    const sectionIds = ['#home', '#about', '#skills', '#projects', '#contact'];
    const handleScrollSpy = () => {
      let found = '#home';
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.querySelector(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            found = sectionIds[i];
          }
        }
      }
      setScrolledNav(found);
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeColor = { color: '#6366f1', fontWeight: 700 };
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">Portofolio</div>
        {isMobile ? (
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <div className="nav-links desktop">
            <a
              href="#home"
              style={scrolledNav === '#home' ? activeColor : {}}
            >Home</a>
            <a
              href="#about"
              style={scrolledNav === '#about' ? activeColor : {}}
            >Tentang Saya</a>
            <a
              href="#skills"
              style={scrolledNav === '#skills' ? activeColor : {}}
            >Keahlian</a>
            <a
              href="#projects"
              style={scrolledNav === '#projects' ? activeColor : {}}
            >Project</a>
            <a
              href="#contact"
              style={scrolledNav === '#contact' ? activeColor : {}}
            >Contact</a>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        )}
      </div>
      {isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
          <a
            href="#home"
            style={scrolledNav === '#home' ? activeColor : {}}
          >Home</a>
          <a
            href="#about"
            style={scrolledNav === '#about' ? activeColor : {}}
          >Tentang Saya</a>
          <a
            href="#skills"
            style={scrolledNav === '#skills' ? activeColor : {}}
          >Keahlian</a>
          <a
            href="#projects"
            style={scrolledNav === '#projects' ? activeColor : {}}
          >Project</a>
          <a
            href="#contact"
            style={scrolledNav === '#contact' ? activeColor : {}}
          >Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

