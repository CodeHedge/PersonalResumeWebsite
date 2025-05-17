'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex space-x-8">
          <Link 
            href="/"
            className={`py-4 px-3 text-sm font-medium border-b-2 ${
              pathname === '/' 
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Professional
          </Link>
          <Link
            href="/personal"
            className={`py-4 px-3 text-sm font-medium border-b-2 ${
              pathname === '/personal'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Personal
          </Link>
        </div>
      </div>
    </nav>
  )
} 