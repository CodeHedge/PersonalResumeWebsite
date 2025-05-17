import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="block transform hover:scale-105 transition-transform duration-200">TRENT</span>
              <span className="block transform hover:scale-105 transition-transform duration-200 delay-75">HANCOCK</span>
            </h1>
            <h2 className="text-2xl font-light mb-6 text-blue-100">
              Sr. Controls Manufacturing Engineer
            </h2>
          </div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
            <Image
              src="/profile.png"
              alt="Trent Hancock"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-[1.02] transition-transform duration-200">
          <p className="text-lg leading-relaxed text-blue-50">
            Accomplished Senior Manufacturing Controls Engineer that adapts quickly in complex
            manufacturing processes. I have developed a broad set of skills that I've acquired
            professionally and personally that set me apart from others. If you're looking for
            someone that has a passion for engineering on and off the clock, let's have a chat.
          </p>
        </div>
      </div>
    </header>
  )
} 