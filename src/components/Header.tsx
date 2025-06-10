import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-primary-dark via-primary-red to-secondary-red text-light-gray py-24"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              <motion.span
                className="block transform hover:scale-105"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                TRENT
              </motion.span>
              <motion.span
                className="block transform hover:scale-105"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                HANCOCK
              </motion.span>
            </h1>
            <h2 className="text-2xl font-light mb-6 text-light-gray">
              Sr. Manufacturing Controls Engineer
            </h2>
          </div>
          <motion.div
            className="relative w-32 h-32 rounded-full overflow-hidden bg-light-gray/10 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/profile.png"
              alt="Trent Hancock"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-8 bg-light-gray/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-[1.02] transition-transform duration-200"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-light-gray">
            A motivated Senior Manufacturing Controls Engineer with a proven track record in optimizing complex manufacturing processes.
            Combining deep technical expertise with a passion for engineering, I specialize in developing automation
            solutions that drive operational efficiency. Whether it's implementing control systems or mentoring future engineers,
            I bring the same level of dedication and innovation to every project.
          </p>
        </motion.div>
      </div>
    </motion.header>
  )
}
