import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'MG Corporation | Coimbatore',
  description: 'Engineering Excellence in Automation, Garments, and Construction.',
  metadataBase: new URL('https://mg-corporation.vercel.app'),
  openGraph: {
    title: 'MG Corporation',
    description: 'A diversified conglomerate in Coimbatore specializing in industrial automation, apparel, and construction.',
    url: 'https://mg-corporation.vercel.app',
    siteName: 'MG Corporation',
    locale: 'en_US',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-roboto antialiased" suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
