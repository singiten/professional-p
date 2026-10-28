import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-2">My Background</h2>
        <h3 className="text-4xl md:text-5xl font-bold">About Me</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-slate-600 dark:text-slate-300"
        >
          <p>
            I am a 4th-year Information Science student and a full-stack developer. I don't just build software. I <strong className="text-rose-600 dark:text-rose-400">teach it, secure it, and ship it.</strong>
          </p>
          <p>
            As a Backend Teacher at ElevateSkill, I break down complex server-side concepts for students. After completing a 13-week Cybersecurity Programme with ALX, I approach every line of code with a security-first mindset. 
          </p>
          <p>
            I work fluently across <strong>MERN</strong> and <strong>PERN</strong> stacks, because the right database for the job matters more than loyalty to one stack. From hackathons to climate action, I believe technology is the bridge to solving Africa's biggest problems.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Glassmorphism Rose Cards */}
          <div className="bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/50 text-center hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">8+</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Full-Stack Projects</p>
          </div>
          
          <div className="bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/50 text-center hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">6+</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Certifications</p>
          </div>

          <div className="bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/50 text-center hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">2+</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Coding</p>
          </div>

          <div className="bg-rose-50/50 dark:bg-rose-950/20 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-rose-100 dark:border-rose-900/50 text-center hover:-translate-y-1 transition-transform duration-300">
            <h4 className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">3</h4>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Hackathons</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;