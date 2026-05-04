import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Animasyonu',
      description: 'Ürün vitrinleri için dinamik animasyon tasarımı',
      category: 'Reklam'
    },
    {
      id: 2,
      title: 'Marka Tanıtım Videosu',
      description: 'Kurumsal kimliği öne çıkaran profesyonel animasyon',
      category: 'Video'
    },
    {
      id: 3,
      title: '3D Ürün Gösterimi',
      description: 'Ürünlerin 360 derece dönen animasyon gösterimi',
      category: 'Animasyon'
    },
    {
      id: 4,
      title: 'Sosyal Medya Reklam',
      description: 'Instagram ve TikTok için özelleştirilmiş animasyonlar',
      category: 'Sosyal'
    },
    {
      id: 5,
      title: 'Kurumsal Sunum',
      description: 'Etkinlik ve sunumlara yönelik interaktif animasyonlar',
      category: 'Sunun'
    },
    {
      id: 6,
      title: 'Web Deneyimi',
      description: 'Website için etkileyici scroll ve hover animasyonları',
      category: 'Web'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="portfolio" className="py-20 px-4 bg-darker">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black text-gold mb-4">Portfolyomuz</h2>
          <p className="text-gray-400 text-lg">Gerçekleştirdiğimiz başarılı projeler</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(173, 32, 32, 0.2)' }}
              className="group bg-dark border border-crimson/30 rounded-xl overflow-hidden hover:border-gold/50 transition-all cursor-pointer"
            >
              {/* Image Area */}
              <motion.div
                className="relative h-48 bg-gradient-to-br from-crimson/30 to-dark-red/20 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity"
                >
                  {project.id}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50"
                >
                  <FaPlay className="text-gold text-3xl" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gold">{project.title}</h3>
                  <span className="text-xs px-3 py-1 bg-crimson/30 text-gold rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
