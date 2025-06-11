"use client"
import React from 'react'
<<<<<<< HEAD
import { motion } from 'framer-motion'
=======
import { motion } from '@/lib/framer-motion'
>>>>>>> origin/ikhzbq-codex/redesign-personal-resume-website

export default function Contact() {
  return (
    <motion.section
      className="mb-12 transform -mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-primary-dark rounded-xl shadow-lg p-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <a
            href="https://maps.google.com/?q=Modesto,CA"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-primary-dark to-primary-dark/80 p-6 rounded-lg hover:from-primary-red/20 hover:to-primary-red/10 transition-colors duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-red/20 rounded-full flex items-center justify-center group-hover:bg-primary-red/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray font-medium">Location</p>
                <p className="text-light-gray font-semibold">Modesto, CA</p>
              </div>
            </div>
          </a>

          <a
            href="tel:9182900923"
            className="group bg-gradient-to-br from-primary-dark to-primary-dark/80 p-6 rounded-lg hover:from-primary-red/20 hover:to-primary-red/10 transition-colors duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-red/20 rounded-full flex items-center justify-center group-hover:bg-primary-red/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray font-medium">Phone</p>
                <p className="text-light-gray font-semibold">(918) 290-0923</p>
              </div>
            </div>
          </a>

          <a
            href="mailto:trenthancock123@gmail.com"
            className="group bg-gradient-to-br from-primary-dark to-primary-dark/80 p-6 rounded-lg hover:from-primary-red/20 hover:to-primary-red/10 transition-colors duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-red/20 rounded-full flex items-center justify-center group-hover:bg-primary-red/30 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray font-medium">Email</p>
                <p className="text-light-gray font-semibold truncate">trenthancock123@gmail.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  )
}
