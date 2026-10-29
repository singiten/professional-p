import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  // 1. Check local storage first, otherwise default to TRUE (Dark Mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; 
  });
  
  const [scrolled, setScrolled] = useState(false);

  // 2. Apply the theme when it changes and save to local storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Singiten<span className="text-amber-600 dark:text-amber-400">.dev</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
              {link.name}
            </a>
          ))}
          
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a href="#contact" className="bg-amber-500 dark:bg-amber-600 text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-400 dark:hover:bg-amber-500 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;