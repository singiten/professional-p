import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          Singiten<span className="text-rose-600 dark:text-rose-400">.dev</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
              {link.name}
            </a>
          ))}
          
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-200">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a href="#contact" className="bg-rose-600 dark:bg-rose-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;