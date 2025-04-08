import { motion } from 'framer-motion';

const About = () => {
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
              À propos de moi
            </h1>
            <p className="text-xl md:text-2xl text-light/80 max-w-3xl mx-auto">
              Développeur web passionné, créant des expériences numériques exceptionnelles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Qui suis-je ?</h2>
              <p className="text-lg text-light/80 mb-6">
                Je suis un développeur web passionné par la création d'applications web modernes et performantes. 
                Mon approche combine design, fonctionnalité et expérience utilisateur pour créer des solutions 
                numériques qui répondent aux besoins de mes clients.
              </p>
              <p className="text-lg text-light/80">
                Avec une solide expérience en développement front-end et back-end, je m'efforce de créer des 
                applications web qui sont non seulement visuellement attrayantes, mais aussi robustes et évolutives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Mon parcours</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-light mb-2">Formation</h3>
                  <p className="text-light/80">Master en Développement Web - Université XYZ</p>
                  <p className="text-light/60 text-sm">2018 - 2020</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-light mb-2">Expérience</h3>
                  <p className="text-light/80">Développeur Full Stack - Entreprise ABC</p>
                  <p className="text-light/60 text-sm">2020 - Présent</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-light mb-2">Certifications</h3>
                  <p className="text-light/80">AWS Certified Developer</p>
                  <p className="text-light/60 text-sm">2021</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Mes valeurs</h2>
            <p className="text-xl text-light/80">
              Les principes qui guident mon travail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualité',
                description: 'Je m\'efforce de créer des solutions de haute qualité qui répondent aux besoins de mes clients.',
                icon: '✨'
              },
              {
                title: 'Innovation',
                description: 'Je recherche constamment de nouvelles technologies et approches pour améliorer mes projets.',
                icon: '💡'
              },
              {
                title: 'Collaboration',
                description: 'Je crois en la collaboration et au travail d\'équipe pour atteindre les meilleurs résultats.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-light mb-4">{value.title}</h3>
                <p className="text-light/80 text-lg">{value.description}</p>
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
              Intéressé par mon profil ?
            </h2>
            <p className="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
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

export default About; 