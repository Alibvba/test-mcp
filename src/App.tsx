import type { FC } from 'react';
import './index.css';
import { motion } from 'framer-motion';

const App: FC = () => {
  return (
    <div className="bg-dark text-light min-h-screen">
      <header className="p-8">
        <motion.h1 className="text-4xl font-bold gradient-text" animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          gregory-theodore
        </motion.h1>
      </header>
      <main className="p-8">
        <motion.section id="home" className="mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h2 className="section-title">Web Designer & Développeur créatif en Martinique</h2>
          <p className="section-content">J'aide les entreprises locales à se démarquer avec des sites performants, modernes et bien référencés.</p>
        </motion.section>
        <section id="about" className="mb-16 card">
          <h2 className="section-title">Qui suis-je ?</h2>
          <p className="section-content">Je m'appelle Grégory THEODORE, créatif, passionné de tech et toujours en quête de solutions utiles.</p>
          <p className="section-content">Avec un diplôme en web design, j'ai enrichi mon profil de compétences en développement web (React, WordPress), automatisation, graphisme, SEO, et plus récemment scraping Python et intelligence artificielle.</p>
          <p className="section-content">Je conçois des sites efficaces, accessibles, et pensés pour vos clients. Et je peux aussi automatiser vos tâches, créer vos visuels et optimiser votre visibilité sur Google.</p>
        </section>
        <section id="skills" className="mb-16 card">
          <h2 className="section-title">Compétences</h2>
          <ul className="mt-4 space-y-2 text-light-muted">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>Web: React, Tailwind, WordPress, HTML/CSS</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>Design: Figma, Affiches, Logos, UI/UX</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>Automatisation: Python, Web scraping, Dashboards Excel</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>SEO: Yoast SEO, Référencement naturel</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>3D & animation: Three.js (à venir), Framer Motion</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <span>Outils: GitHub, VSCode, Node.js, Firebase</span>
            </li>
          </ul>
        </section>
        <section id="services" className="mb-16 card">
          <h2 className="section-title">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-dark-accent p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-primary">Création de sites web</h3>
              <p className="text-light-muted">Site vitrine WordPress ou React, Design moderne et responsive, Intégration de fonctionnalités SEO & accessibilité</p>
            </div>
            <div className="bg-dark-accent p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-primary">Automatisation</h3>
              <p className="text-light-muted">Extraction de données (scraping), Génération automatique de tableaux de bord, Petites apps locales no-code/low-code</p>
            </div>
            <div className="bg-dark-accent p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-primary">Graphisme & communication</h3>
              <p className="text-light-muted">Création de flyers, affiches, signalétique, Branding & logos, Supports de formation ou documents qualité</p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="mb-16 card">
          <h2 className="section-title">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <blockquote className="bg-dark-accent p-4 rounded-lg italic text-light-muted">
              "Il a transformé nos fichiers Excel en outils lisibles et dynamiques." 
              <footer className="mt-2 text-primary font-medium">- Responsable d'équipe</footer>
            </blockquote>
            <blockquote className="bg-dark-accent p-4 rounded-lg italic text-light-muted">
              "Mon site est clair, rapide et bien référencé. Merci !" 
              <footer className="mt-2 text-primary font-medium">- Artisan indépendant</footer>
            </blockquote>
          </div>
        </section>
        <section id="contact" className="mb-16 card">
          <h2 className="section-title">Contact</h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center text-light-muted">
              <span className="w-8 h-8 flex items-center justify-center bg-primary rounded-full mr-3">📧</span>
              <span>Email : <a href="mailto:theodore97224@gmail.com" className="link">theodore97224@gmail.com</a></span>
            </p>
            <p className="flex items-center text-light-muted">
              <span className="w-8 h-8 flex items-center justify-center bg-primary rounded-full mr-3">📍</span>
              <span>Localisation : Martinique (prestations à distance ou en présentiel)</span>
            </p>
            <p className="flex items-center text-light-muted">
              <span className="w-8 h-8 flex items-center justify-center bg-primary rounded-full mr-3">🔗</span>
              <span>
                <a href="#" className="link mr-3">LinkedIn</a>
                <a href="#" className="link mr-3">GitHub</a>
                <a href="#" className="link">Instagram</a>
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
