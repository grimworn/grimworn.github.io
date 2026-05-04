import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-crimson/20 bg-darker py-8 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Grimworn Kreatif Stüdyo. Tüm Hakları Saklıdır.
        </p>
        <p className="text-gray-500 text-xs mt-2">Sevgiyle tasarlandı ✨</p>
      </div>
    </motion.footer>
  )
}

export default Footer
