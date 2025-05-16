import React from 'react'

export default function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Network Security and Administration</h3>
            <p className="text-blue-600 font-semibold">Central Technology</p>
          </div>
          <p className="text-gray-600 mt-1 md:mt-0">2011 – 2014</p>
        </div>
      </div>
    </section>
  )
} 