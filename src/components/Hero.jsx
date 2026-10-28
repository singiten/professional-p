import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          
          <span className="bg-rose-600/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
            Available for Opportunities
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-6 mb-4">
            Hi, I'm <span className="text-rose-600 dark:text-rose-400">Singiten Beshada</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light mb-8">
            Full-Stack Developer | Cybersecurity (ALX) | Backend Teacher
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            I don't just build software. I teach it, secure it, and ship it. 
            Specializing in MERN and PERN stacks to create secure, production-ready web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/Singiten_Beshada_CV.pdf" download className="flex items-center gap-2 bg-rose-600 dark:bg-rose-500 text-white px-8 py-3.5 rounded-full font-medium hover:bg-rose-700 dark:hover:bg-rose-600 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center">
              <FiDownload /> Download CV
            </a>
            
            <a href="#projects" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-full font-medium hover:border-rose-600 dark:hover:border-rose-400 transition-all w-full sm:w-auto justify-center">
              View Projects <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;