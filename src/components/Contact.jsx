import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Teşekkürler! Mesajınız başarıyla alındı. Kısa sürede sizinle iletişime geçeceğiz.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Adres',
      value: 'İstanbul, Türkiye'
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: '+90 (555) 555 55 55'
    },
    {
      icon: FaEnvelope,
      title: 'E-posta',
      value: 'info@grimworn.com'
    }
  ]

  const socials = [
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaBehance, url: '#', label: 'Behance' }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-darker">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-black text-gold mb-4">İletişim</h2>
          <p className="text-gray-400 text-lg">Bize ulaşın ve birlikte büyüyelim</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız"
                required
                className="w-full px-6 py-3 bg-dark border border-crimson/30 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta Adresiniz"
                required
                className="w-full px-6 py-3 bg-dark border border-crimson/30 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                required
                className="w-full px-6 py-3 bg-dark border border-crimson/30 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız..."
                rows="6"
                required
                className="w-full px-6 py-3 bg-dark border border-crimson/30 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-crimson to-dark-red hover:from-gold hover:to-crimson text-white font-bold rounded-lg transition-all"
            >
              Gönder
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson to-dark-red rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gold mb-1">{info.title}</h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-gold mb-4">Sosyal Ağlarımız</h3>
              <div className="flex gap-4 flex-wrap">
                {socials.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-dark border border-gold/50 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"
                      title={social.label}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
