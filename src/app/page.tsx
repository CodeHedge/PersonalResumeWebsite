import React from 'react'
import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Contact />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  )
} 