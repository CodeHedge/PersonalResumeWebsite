'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-primary-dark shadow-lg">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex space-x-8">
          <Link 
            href="/"
            className={`py-4 px-3 text-sm font-medium border-b-2 ${
              pathname === '/' 
                ? 'border-primary-red text-primary-red'
                : 'border-transparent text-light-gray hover:text-primary-red hover:border-primary-red'
            }`}
          >
            Professional
          </Link>
          <Link
            href="/personal"
            className={`py-4 px-3 text-sm font-medium border-b-2 ${
              pathname === '/personal'
                ? 'border-primary-red text-primary-red'
                : 'border-transparent text-light-gray hover:text-primary-red hover:border-primary-red'
            }`}
          >
            Personal
          </Link>
          <Link
            href="/photography"
            className={`py-4 px-3 text-sm font-medium border-b-2 ${
              pathname === '/photography'
                ? 'border-primary-red text-primary-red'
                : 'border-transparent text-light-gray hover:text-primary-red hover:border-primary-red'
            }`}
          >
            Photography
          </Link>
        </div>
      </div>
    </nav>
  )
} 