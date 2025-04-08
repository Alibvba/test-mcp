import type { FC } from 'react';
import { useState } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';

const App: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Témoignages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-dark text-light min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold gradient-text">gregory-theodore</h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="nav-link px-3 py-2 text-base font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-primary focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="nav-link block px-3 py-2 text-base font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
                Web Designer & Développeur créatif
              </h1>
              <p className="text-2xl md:text-3xl text-light-muted mb-8">
                En Martinique, je crée des sites web modernes et performants
              </p>
              <motion.a
                href="#contact"
                className="button inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-12">Qui suis-je ?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="section-content">
                    Je m'appelle Grégory THEODORE, créatif, passionné de tech et toujours en quête de solutions utiles.
                  </p>
                  <p className="section-content">
                    Avec un diplôme en web design, j'ai enrichi mon profil de compétences en développement web (React, WordPress), automatisation, graphisme, SEO, et plus récemment scraping Python et intelligence artificielle.
                  </p>
                  <p className="section-content">
                    Je conçois des sites efficaces, accessibles, et pensés pour vos clients. Et je peux aussi automatiser vos tâches, créer vos visuels et optimiser votre visibilité sur Google.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full flex items-center justify-center text-light-muted">
                      Photo de profil à venir
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-12">Compétences</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Web',
                    skills: 'React, Tailwind, WordPress, HTML/CSS',
                    icon: '🌐'
                  },
                  {
                    title: 'Design',
                    skills: 'Figma, Affiches, Logos, UI/UX',
                    icon: '🎨'
                  },
                  {
                    title: 'Automatisation',
                    skills: 'Python, Web scraping, Dashboards Excel',
                    icon: '⚡'
                  },
                  {
                    title: 'SEO',
                    skills: 'Yoast SEO, Référencement naturel',
                    icon: '🔍'
                  },
                  {
                    title: '3D & Animation',
                    skills: 'Three.js (à venir), Framer Motion',
                    icon: '🎮'
                  },
                  {
                    title: 'Outils',
                    skills: 'GitHub, VSCode, Node.js, Firebase',
                    icon: '🛠️'
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-primary">{category.title}</h3>
                    <p className="text-xl text-light-muted">{category.skills}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-12">Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Création de sites web',
                    description: 'Site vitrine WordPress ou React, Design moderne et responsive, Intégration de fonctionnalités SEO & accessibilité',
                    icon: '💻'
                  },
                  {
                    title: 'Automatisation',
                    description: 'Extraction de données (scraping), Génération automatique de tableaux de bord, Petites apps locales no-code/low-code',
                    icon: '⚙️'
                  },
                  {
                    title: 'Graphisme & communication',
                    description: 'Création de flyers, affiches, signalétique, Branding & logos, Supports de formation ou documents qualité',
                    icon: '🎯'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 text-primary">{service.title}</h3>
                    <p className="text-xl text-light-muted">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-12">Témoignages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    quote: "Il a transformé nos fichiers Excel en outils lisibles et dynamiques.",
                    author: "Responsable d'équipe",
                    role: "Client Automatisation"
                  },
                  {
                    quote: "Mon site est clair, rapide et bien référencé. Merci !",
                    author: "Artisan indépendant",
                    role: "Client Web"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="card group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <blockquote className="text-2xl italic text-light-muted mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="text-xl text-primary font-medium">
                      {testimonial.author}
                      <span className="block text-lg text-light-muted">{testimonial.role}</span>
                    </footer>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-dark-lighter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-center mb-12">Contact</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-2xl">📧</span>
                    <div>
                      <h3 className="text-2xl font-medium text-light">Email</h3>
                      <a href="mailto:theodore97224@gmail.com" className="text-xl text-light-muted hover:text-primary transition-colors">
                        theodore97224@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-2xl">📍</span>
                    <div>
                      <h3 className="text-2xl font-medium text-light">Localisation</h3>
                      <p className="text-xl text-light-muted">Martinique (prestations à distance ou en présentiel)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-2xl">🔗</span>
                    <div>
                      <h3 className="text-2xl font-medium text-light">Réseaux sociaux</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-xl text-light-muted hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="text-xl text-light-muted hover:text-primary transition-colors">GitHub</a>
                        <a href="#" className="text-xl text-light-muted hover:text-primary transition-colors">Instagram</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-light-muted mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-dark border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-light text-lg"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-light-muted mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-dark border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-light text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-lg font-medium text-light-muted mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 bg-dark border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-light text-lg"
                        placeholder="Votre message..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="button w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Envoyer
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter py-12 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">gregory-theodore</h3>
              <p className="text-xl text-light-muted">
                Web Designer & Développeur créatif en Martinique
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-light mb-4">Navigation</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-lg text-light-muted hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-light mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:theodore97224@gmail.com" className="text-lg text-light-muted hover:text-primary transition-colors">
                    theodore97224@gmail.com
                  </a>
                </li>
                <li className="text-lg text-light-muted">
                  Martinique
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-light-muted">
            <p className="text-lg">&copy; {new Date().getFullYear()} gregory-theodore. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
