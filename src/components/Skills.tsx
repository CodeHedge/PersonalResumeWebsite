import React from 'react'

interface SkillCategory {
  name: string;
  skills: string[];
  icon: JSX.Element;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Manufacturing',
    skills: [
      '6 Axis Robots',
      'Cell Simulations',
      'Die Casting and CNC Mfg',
      'Additive Mfg. FDM/SLA',
      'Understanding of GD&T',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Controls & Automation',
    skills: [
      'PLC and HMI Programming',
      'Safety Zone Monitoring (Robotics)',
      'Siemens and Rockwell',
      'Vision (Standard Tools, 3D, Thermal)',
      'SCADA Development',
      'MYSQL Database',
      'KPI Dashboard Development',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Technical',
    skills: [
      'Python (Intermediate)',
      'SQL (Intermediate)',
      'Schematic Creation (Intermediate)',
      '3D Modeling (Beginner)',
      'PCB Design & Layout (Beginner)',
      'REST API',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: 'Infrastructure',
    skills: [
      'Strong Computer Skills',
      'Subnetting/Firewall/Switching',
      'Network Administration',
      'Server Administration (Linux/Windows)',
      'Web Hosting',
      'Content Delivery Network',
      'DNS Management',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    name: 'Soft Skills',
    skills: [
      'Small Business Owner',
      'Vast Technical Skillset',
      'Adaptable and Driven',
      'Innate Curiosity',
      'Pretty Funny',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-primary-red">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-primary-dark rounded-xl shadow-sm border border-primary-red/20 hover:shadow-md transition-shadow p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-red/20 rounded-lg flex items-center justify-center text-primary-red mr-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-light-gray">{category.name}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center text-gray hover:text-primary-red transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-primary-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 