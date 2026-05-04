import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-darker via-dark to-darker flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-gray-200">YaratıcılSSSASSSığı </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-gold">
              Hareket
            </span>
            <span className="text-gray-200"> Haline Getir</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          >
            Reklam animasyonlarında sektörün en inovatif çözümleri
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(173, 32, 32, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-crimson to-dark-red text-white font-bold rounded-full hover:from-gold hover:to-crimson transition-all"
            >
              Başla <FaArrowRight />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-full hover:bg-gold/10 transition-all"
            >
              Daha Fazla
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ y: [-30, 30, -30] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 right-10 w-64 h-64 bg-crimson/10 rounded-full blur-3xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [30, -30, 30] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-dark-red/10 rounded-full blur-3xl hidden lg:block"
        />
      </div>
    </section>
  )
}

export default Hero
