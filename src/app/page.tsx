import React from 'react'
import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Contact />
        <Skills />
        <Experience />
        <Education />
      </div>
    </motion.main>
  )
}
