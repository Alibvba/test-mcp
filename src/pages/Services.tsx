import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Développement Web',
      description: 'Création de sites web et d\'applications modernes avec les dernières technologies.',
      features: [
        'Sites web responsifs',
        'Applications web progressives (PWA)',
        'E-commerce',
        'Portails web',
        'Intégration CMS',
      ],
      icon: '💻'
    },
    {
      title: 'Design UI/UX',
      description: 'Création d\'interfaces utilisateur intuitives et d\'expériences utilisateur exceptionnelles.',
      features: [
        'Design d\'interface',
        'Prototypage',
        'Tests utilisateurs',
        'Optimisation de l\'expérience utilisateur',
        'Design system',
      ],
      icon: '🎨'
    },
    {
      title: 'Consulting',
      description: 'Conseil et accompagnement pour vos projets numériques.',
      features: [
        'Audit technique',
        'Architecture logicielle',
        'Optimisation des performances',
        'Sécurité',
        'Scalabilité',
      ],
      icon: '💡'
    }
  ];

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
              Mes services
            </h1>
            <p className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto">
              Des solutions web sur mesure pour répondre à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold gradient-text mb-4">{service.title}</h2>
                <p className="text-light/80 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.1 }}
                      className="flex items-center text-light/80"
                    >
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Mon processus</h2>
            <p className="text-xl text-light/80">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analyse des besoins',
                description: 'Compréhension approfondie de vos objectifs et besoins',
                icon: '🔍'
              },
              {
                step: '02',
                title: 'Conception',
                description: 'Création de maquettes et prototypes',
                icon: '✏️'
              },
              {
                step: '03',
                title: 'Développement',
                description: 'Implémentation avec les meilleures pratiques',
                icon: '⚙️'
              },
              {
                step: '04',
                title: 'Livraison',
                description: 'Tests, déploiement et support continu',
                icon: '🚀'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-primary font-bold mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-light mb-2">{step.title}</h3>
                <p className="text-light/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-primary text-dark font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Me contacter
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 