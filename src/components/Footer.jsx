import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 border-t border-rose-100 dark:border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold tracking-tighter text-slate-800 dark:text-white">
            Singiten<span className="text-rose-600 dark:text-rose-400">.dev</span>
          </a>
          <p className="text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} Singiten Beshada. Built with React & Tailwind.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/singiten" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-rose-100 dark:border-slate-700">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/singiten-beshada/" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-rose-100 dark:border-slate-700">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:singiten2127@gmail.com" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:text-rose-600 dark:hover:text-rose-400 transition-colors border border-rose-100 dark:border-slate-700">
            <FiMail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;