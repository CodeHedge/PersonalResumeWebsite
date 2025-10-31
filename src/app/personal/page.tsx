"use client"
import React from 'react'
import { motion } from '@/lib/framer-motion'

export default function PersonalPage() {
  return (
    <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-r from-primary-dark via-primary-red to-secondary-red text-light-gray py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Beyond Engineering</h1>
          <p className="text-xl text-light-gray">
            When I'm not engineering solutions, here's what keeps me curious and engaged.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 gap-8">
          {/* Hobbies & Interests */}
          <div className="bg-primary-dark rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-primary-red/20">
            <h2 className="text-2xl font-bold mb-4 text-primary-red">Hobbies & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-light-gray">Photography</h3>
                    <p className="text-gray">Capturing moments and exploring creative visual storytelling through the lens.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-light-gray">Educational Filmmaking</h3>
                    <p className="text-gray">Creating engaging technical content and sharing knowledge through video.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-light-gray">Coding</h3>
                    <p className="text-gray">Exploring new technologies and building personal automation projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-light-gray">Electronic Music</h3>
                    <p className="text-gray">Enthusiast of EDM, particularly Glitch Pop and Future Bass genres.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div className="bg-primary-dark rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-primary-red/20">
            <h2 className="text-2xl font-bold mb-4 text-primary-red">Personal Projects</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-red pl-4">
                <h3 className="font-semibold text-light-gray text-lg">Network Testing Tools Business</h3>
                <p className="text-gray mt-2">
                  Founded and operate a successful business designing and selling custom PCBs for network stability testing. 
                  Built an e-commerce presence on Shopify, achieving $30K revenue in 2024 with projected growth to $60K in 2025.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">PCB Design</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">E-commerce</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">Hardware</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">SEO and Marketing</span>
                </div>
              </div>
              <div className="border-l-4 border-primary-red pl-4">
                <h3 className="font-semibold text-light-gray text-lg">Smart Home Automation</h3>
                <p className="text-gray mt-2">
                  Implemented a comprehensive home automation system using Raspberry Pi 5 B and Home Assistant, 
                  integrated with a Plex media server featuring Sonarr, Radarr, and Overseerr for automated content management.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">Raspberry Pi</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">Home Assistant</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">Media Server</span>
                </div>
              </div>
              <div className="border-l-4 border-primary-red pl-4">
                <h3 className="font-semibold text-light-gray text-lg">LVGL Motor Controller Interface</h3>
                <p className="text-gray mt-2">
                  Developed an intuitive user interface for a motor controller using LVGL on Arduino, 
                  creating a seamless and responsive control system with a modern graphical interface.
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">Arduino</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">LVGL</span>
                  <span className="text-sm bg-primary-red/20 text-gray px-2 py-1 rounded border border-primary-red/20">UI Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Involvement */}
          <div className="bg-primary-dark rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border border-primary-red/20">
            <h2 className="text-2xl font-bold mb-4 text-primary-red">Community Involvement</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <h3 className="font-semibold text-light-gray">Open Source Contributor</h3>
                  <p className="text-gray">
                    Contributing to various open-source projects, particularly focusing on 
                    developing tools, beta testing, prototyping, and teaching others about the projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
