import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Contactez-moi
            </h1>
            <p className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto">
              Discutons de votre projet et voyons comment je peux vous aider
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">Envoyez-moi un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light mb-2">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-light/20 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-light/20 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-light mb-2">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-light/20 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-light mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-dark/50 border border-light/20 text-light focus:outline-none focus:border-primary transition-colors duration-300"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-dark font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold gradient-text mb-6">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">Localisation</h3>
                    <p className="text-light/80">Paris, France</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">Email</h3>
                    <a href="mailto:contact@gregory-theodore.com" className="text-light/80 hover:text-primary transition-colors duration-300">
                      contact@gregory-theodore.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-light/80 hover:text-primary transition-colors duration-300">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-1">Disponibilité</h3>
                    <p className="text-light/80">Lundi - Vendredi: 9h - 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-light mb-4">Suivez-moi</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: '🐙', label: 'GitHub', url: 'https://github.com/gregory-theodore' },
                    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/gregory-theodore' },
                    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/gregory-theodore' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl hover:text-primary transition-colors duration-300"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 