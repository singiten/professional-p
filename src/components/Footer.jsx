import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#0B1120] border-t border-rose-100 dark:border-slate-800 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-800 dark:text-white">
              Singiten<span className="text-rose-600 dark:text-rose-400">.dev</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer & Cybersecurity Specialist based in Addis Ababa, Ethiopia. Building secure, production-ready systems.
            </p>
            <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 px-3 py-1.5 rounded-full text-xs font-semibold text-rose-600 dark:text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Open for Opportunities
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#home" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Projects</a></li>
              <li><a href="#certificates" className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">Certificates</a></li>
            </ul>
          </div>

          {/* Column 3: Social & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white mb-4">Social & Channels</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="https://linkedin.com/in/singiten-beshada" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  <FiLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/singiten" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  <FiGithub /> GitHub
                </a>
              </li>
              <li>
                <a href="mailto:singiten2127@gmail.com" className="flex items-center gap-3 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  <FiMail /> singiten2127@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251944067097" className="flex items-center gap-3 hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                  <FiPhone /> +251 944 067 097
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin /> Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Singiten Beshada. All rights reserved.</p>
          <p>Designed & Built by Singiten Beshada.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-rose-600 dark:bg-rose-500 text-white px-4 py-2 rounded-full font-medium hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors"
          >
            <FiArrowUp /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
