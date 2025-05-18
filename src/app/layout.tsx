import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        {children}
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  )
} 