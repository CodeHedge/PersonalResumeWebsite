import React from 'react'

export default function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-primary-red">Education</h2>
      <div className="bg-primary-dark p-6 rounded-lg shadow-sm border border-primary-red/20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-bold text-light-gray">Network Security and Administration</h3>
            <p className="text-primary-red font-semibold">Central Technology</p>
          </div>
          <p className="text-light-gray/80 mt-1 md:mt-0">2011 – 2014</p>
        </div>
      </div>
    </section>
  )
} 