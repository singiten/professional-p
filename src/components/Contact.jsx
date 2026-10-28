import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceID = service_oeqpybh;
    const templateID = template_b4034md;
    const publicKey = WcABf_vtryBMhtJyU;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Singiten',
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-rose-100 dark:border-slate-800">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-2">Get In Touch</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Contact Me</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h4 className="text-2xl font-bold mb-4">Let's work together</h4>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm currently available for internships and junior roles.
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-rose-50 dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-slate-700 text-rose-600 dark:text-rose-400">
              <FiMail size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="font-semibold text-slate-800 dark:text-white">singiten2127@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-rose-50 dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-slate-700 text-rose-600 dark:text-rose-400">
              <FiPhone size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="font-semibold text-slate-800 dark:text-white">+251 944 067 097</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-rose-50 dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-rose-100 dark:border-slate-700 text-rose-600 dark:text-rose-400">
              <FiMapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="font-semibold text-slate-800 dark:text-white">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-rose-100 dark:border-slate-700"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Message</label>
              <textarea 
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-rose-600 dark:bg-rose-500 text-white py-3.5 rounded-xl font-medium hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to send' : <><FiSend /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;