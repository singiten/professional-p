import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certificates = [
    {
      title: "Cybersecurity Programme",
      issuer: "ALX Africa",
      date: "Sept 2026",
      image: "/cert-alx.png",
      link: "https://drive.google.com/file/d/13T8deI4F4sy59Jw0geW7zeNfYNKgA9vK/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Udacity",
      date: "Nov 2025",
      image: "/cert-udacity-ai.jpg",
      link: "https://drive.google.com/file/d/1i0df32oHheNNzLdgNb3lN5N0vb69EJQk/view?usp=sharing"
    },
    {
      title: "Android Developer Fundamentals",
      issuer: "Udacity",
      date: "Nov 2025",
      image: "/cert-udacity-android.jpg",
      link: "https://drive.google.com/file/d/1ZXnl_iv0BZkXMAvs4wb2BOI-O-xtIc4W/view?usp=sharing"
    },
    {
      title: "STARK Official Hackathon",
      issuer: "STARK",
      date: "Oct 2026",
      image: "/cert-stark.jpeg",
      link: "https://drive.google.com/file/d/1v2rf-oXz7x8wsMNHS49Gacqlb3QPAtOt/view?usp=sharing"
    },
    {
      title: "Software Development Internship",
      issuer: "ElevateSkill plc",
      date: "Aug 2026",
      image: "/cert-elevate.jpg",
      link: "https://drive.google.com/file/d/1iIrG_0_TjKLmbcfkd7zrlZq1HmHdcesJ/view?usp=sharing"
    },
    {
      title: "AI Literacy",
      issuer: "IBM SkillsBuild",
      date: "July 2026",
      image: "/cert-ibm-ai.jpg",
      link: "https://drive.google.com/file/d/1zFRDOpXVvz91SXO5O6MFYza_J5sNf1YF/view?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto bg-slate-50 dark:bg-slate-900/50">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-burgundy-500 uppercase mb-2">Verified Qualifications</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Certifications & Credentials</h3>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
          >
            {/* Image Container with fade effect */}
            <div className="h-40 overflow-hidden relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
               <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Certificate"; }}
              />
              <div className="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 p-1.5 rounded-full text-burgundy-500 shadow-sm">
                <FiAward size={18} />
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h4 className="font-bold text-lg leading-tight mb-1">{cert.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{cert.issuer}</p>
              <p className="text-xs font-semibold text-slate-400 mb-4">{cert.date}</p>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-2 bg-burgundy-500/10 text-burgundy-500 rounded-lg font-medium text-sm hover:bg-burgundy-500 hover:text-white transition-colors"
              >
                View Certificate <FiExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;