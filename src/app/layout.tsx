import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ subsets: ['latin'], weight: ['400','700'] })

export const metadata: Metadata = {
  title: 'Trent Hancock - Sr. Manufacturing Controls Engineer',
  description: 'Professional portfolio and resume of Trent Hancock, an accomplished Senior Manufacturing Controls Engineer specializing in complex manufacturing processes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-primary-dark text-light-gray`}>
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  )
} 