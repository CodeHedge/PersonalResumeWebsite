import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-primary-dark via-primary-red to-secondary-red text-light-gray py-24">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="block transform hover:scale-105 transition-transform duration-200">TRENT</span>
              <span className="block transform hover:scale-105 transition-transform duration-200 delay-75">HANCOCK</span>
            </h1>
            <h2 className="text-2xl font-light mb-6 text-light-gray">
              Sr. Manufacturing Controls Engineer
            </h2>
          </div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-light-gray/10 backdrop-blur-sm">
            <Image
              src="/profile.png"
              alt="Trent Hancock"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-8 bg-light-gray/10 backdrop-blur-sm p-6 rounded-lg transform hover:scale-[1.02] transition-transform duration-200">
          <p className="text-lg leading-relaxed text-light-gray">
            A motivated Senior Manufacturing Controls Engineer with a proven track record in optimizing complex manufacturing processes. 
            Combining deep technical expertise with a passion for engineering, I specialize in developing automation 
            solutions that drive operational efficiency. Whether it's implementing control systems or mentoring future engineers, 
            I bring the same level of dedication and innovation to every project.
          </p>
        </div>
      </div>
    </header>
  )
} 