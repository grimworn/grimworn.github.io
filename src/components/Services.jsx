import { motion } from 'framer-motion'
import { FaFilm, FaPalette, FaVideo, FaCube, FaCode, FaHeadset } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaFilm,
      title: 'Reklam Animasyonu',
      description: 'Markanızı hayata geçiren profesyonel reklam animasyonları',
    },
    {
      icon: FaVideo,
      title: 'Video Prodüksiyonu',
      description: 'Konseptten sonraya kadar tam video prodüksiyon hizmetleri',
    },
    {
      icon: FaPalette,
      title: 'Grafik Tasarım',
      description: 'Markaya uygun, etkileyici grafik tasarım çözümleri',
    },
    {
      icon: FaCube,
      title: '3D Animasyon',
      description: 'Ürünlerinizi 3D ortamda dinamik şekilde gösteri',
    },
    {
      icon: FaCode,
      title: 'Web Animasyonu',
      description: 'Website ve uygulamalarınız için interaktif animasyonlar',
    },
    {
      icon: FaHeadset,
      title: 'Müşteri Desteği',
      description: '24/7 teknik ve yaratıcı destek hizmetleri',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-darker to-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black text-gold mb-4">Hizmetlerimiz</h2>
          <p className="text-gray-400 text-lg">Tüm yaratıcı ihtiyaçlarınız için çözümler</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: '0 20px 40px rgba(173, 32, 32, 0.2)',
                  y: -10
                }}
                className="bg-dark border border-crimson/20 hover:border-gold/50 rounded-xl p-8 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-crimson to-dark-red rounded-lg flex items-center justify-center mb-6 group-hover:from-gold group-hover:to-crimson transition-all"
                >
                  <Icon className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold text-gold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
