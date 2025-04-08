import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jean Dupont',
      role: 'CEO, TechStart',
      content: 'Gregory a transformé notre vision en une application web exceptionnelle. Son expertise technique et sa capacité à comprendre nos besoins ont fait toute la différence.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      rating: 5
    },
    {
      name: 'Marie Martin',
      role: 'Directrice Marketing, InnovCorp',
      content: 'Un travail remarquable ! Le site web que Gregory a créé pour nous a considérablement augmenté notre visibilité en ligne et notre taux de conversion.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      rating: 5
    },
    {
      name: 'Pierre Dubois',
      role: 'Fondateur, EcoSolutions',
      content: 'Gregory a apporté une expertise technique précieuse à notre projet. Sa capacité à résoudre des problèmes complexes et à livrer des solutions innovantes est impressionnante.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      rating: 5
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
              Témoignages
            </h1>
            <p className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto">
              Ce que mes clients disent de mon travail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-light">{testimonial.name}</h3>
                    <p className="text-light/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-light/80 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">En chiffres</h2>
            <p className="text-xl text-light/80">
              Quelques statistiques sur mon travail
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projets réalisés', icon: '🚀' },
              { number: '100%', label: 'Clients satisfaits', icon: '😊' },
              { number: '5+', label: 'Années d\'expérience', icon: '⏳' },
              { number: '24/7', label: 'Support client', icon: '💬' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-light/80">{stat.label}</p>
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
              Vous voulez devenir mon prochain client satisfait ?
            </h2>
            <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de votre projet et rejoindre la liste de mes clients satisfaits.
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

export default Testimonials; 