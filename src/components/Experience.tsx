"use client"
import React from 'react'
import { motion } from '@/lib/framer-motion'
import Image from 'next/image'

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  logos: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "SR. APPLICATIONS ENGINEER",
    company: "Mitsubishi Electric Iconics Digital Solutions - Pentagon Project",
    period: "SEP 2025 – PRESENT",
    logos: ["/work_icons/Iconics.png", "/work_icons/Pentagon_white.png"],
    responsibilities: [
      "SCADA Development: Developing SCADA applications using Iconics Genesis for Facilites Services Directorate (FSD) supporting critical infrastructure at the Pentagon."
    ]
  },
  {
    title: "SR. MANUFACTURING CONTROLS ENGINEER",
    company: "Tesla Inc.",
    period: "DEC 2020 – AUG 2025",
    logos: ["/work_icons/Tesla-logo.png"],
    responsibilities: [
      "Led Manufacturing Initiatives: Directed engineering efforts for Tesla's die casting and CNC facility with a focus on cell design, retrofits, and SCADA reporting.",
      "Launched New Parts (NPI): Led the controls side in the introduction of new parts into production, managing the acquisition of new equipment and integration into our manufacturing process.",
      "Facilitated Design Reviews: Actively participated in and led design reviews, utilizing feedback to refine and iterate on engineering solutions.",
      "Led Rollout of MOS: Spearheaded the rollout of the Manufacturing Operating System (MOS), replacing the legacy system by developing integrated part flows and leveraging APIs and Python to connect PLCs with the SCADA system—resulting in enhanced parts tracking and operational efficiency.",
      "Drove Innovation: Remained current on new products and internal systems, proactively introducing innovative tools to enhance team capabilities.",
      "Oversaw and Mentored: Provided guidance to junior engineers by serving as the escalation point, ensuring effective troubleshooting and resolution of complex production challenges."
    ]
  },
  {
    title: "CONTROLS ENGINEER",
    company: "Marlen International",
    period: "SEP 2017 – MAY 2020",
    logos: ["/work_icons/Marlen.png"],
    responsibilities: [
      "Led Controls Engineering Initiatives: Directed electrical and software development for OEM thermal food processing systems while managing IT operations for the engineering department.",
      "Designed & Enhanced Electrical Systems: Developed and upgraded electrical schematics for multiple machine lines; created detailed electrical BOMs and optimized control panel layouts.",
      "Collaborated with Cross-Functional Teams: Worked directly with mechanical engineers to implement design changes efficiently.",
      "Programmed Automation Controls: Maintained, improved, and developed PLC and HMI programs to ensure robust and reliable machine operations.",
      "Ensured Regulatory Compliance: Coordinated with Customers and international regulatory agencies to modify control systems, ensuring all systems met global compliance standards.",
      "Integrated Production Systems: Successfully integrated new and existing machines into production lines, driving increased efficiency."
    ]
  },
  {
    title: "SYSTEM ADMINISTRATOR",
    company: "Beasley Technology",
    period: "NOV 2013 – SEPT 2017",
    logos: ["/work_icons/BeasleyTechnology.png"],
    responsibilities: [
      "Managed Remote IT Operations: Oversaw IT services for 30+ company and school accounts, ensuring high system availability and security.",
      "Maintained Network Infrastructure: Directed operations for firewalls, switches, access points, and servers, achieving a 99% uptime rate.",
      "Enhanced Security Practices: Implemented advanced network security edge devices and delivered end-user training to minimize vulnerabilities.",
      "Administered User Accounts: Managed access controls and security permissions to support compliance and safeguard data integrity.",
      "Executed Onsite Deployments: Coordinated and deployed new systems, conducting comprehensive testing to ensure seamless functionality.",
      "Monitored Data Integrity: Generated and reviewed monthly backup reports, ensuring reliable disaster recovery readiness."
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-primary-red">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-primary-dark p-6 rounded-lg shadow-sm border border-primary-red/20">
            {/* Logo Container - Always on top */}
            <div className="flex gap-3 items-center justify-start mb-4">
              {exp.logos.map((logo, logoIdx) => (
                <div 
                  key={logoIdx} 
                  className="relative w-16 h-16 flex items-center justify-center bg-white/5 rounded-lg p-1.5 border border-white/10 overflow-hidden"
                >
                  <Image
                    src={logo}
                    alt={`${exp.company} logo`}
                    width={74}
                    height={74}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Content Container */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-light-gray">{exp.title}</h3>
                <p className="text-primary-red font-semibold">{exp.company}</p>
              </div>
              <p className="text-gray whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
