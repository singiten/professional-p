import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: "IT Manager",
      company: "Mahbere Edomias",
      date: "2025 - Present",
      description: "Leading the digital transformation of the organization. Overseeing the development, deployment, and maintenance of their full-stack web platform to manage members, donations, and daily spiritual updates.",
      icon: <FiBriefcase />,
    },
    {
      title: "Backend Teacher",
      company: "ElevateSkill",
      date: "2026 - Present",
      description: "Breaking down complex server-side concepts (Node.js, Express, Databases, API design) for the next generation of developers. Teaching forces me to understand the 'why' behind the code, not just the 'how'.",
      icon: <FiBriefcase />,
    },
    {
      title: "STARK Official Hackathon",
      company: "STARK",
      date: "Sept 2026 - Oct 2026",
      description: "Collaborated with a team to build a voice-first product from scratch in just 3 weeks. Shipped a working platform under intense pressure, proving my ability to deliver real products fast.",
      icon: <FiCode />,
    },
    {
      title: "Software Development Intern",
      company: "ElevateSkill plc",
      date: "2026",
      description: "Worked on real-world, production-level systems. Sharpened my MERN and PERN stack skills, focusing on RESTful API architecture and secure data management.",
      icon: <FiBriefcase />,
    },
    {
      title: "WOMATE Cohort 2",
      company: "Women in Climate",
      date: "2026",
      description: "Selected as a learner to lead climate action initiatives across Africa using technology. Combining software development with real-world environmental impact.",
      icon: <FiAward />,
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-2">Professional History</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Work & Leadership</h3>
      </motion.div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="mb-12 ml-8 relative">
            
            <div className="absolute -left-[49px] top-1 bg-amber-500 dark:bg-amber-600 text-white p-2 rounded-full ring-4 ring-white dark:ring-slate-900 shadow-md">
              {exp.icon}
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">{exp.title}</h4>
                <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 bg-rose-600/10 dark:bg-rose-400/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.date}
                </span>
              </div>
              <h5 className="text-md font-medium text-slate-500 dark:text-slate-400 mb-4">{exp.company}</h5>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;