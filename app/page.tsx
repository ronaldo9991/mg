import Hero from '@/components/Hero'
import About from '@/components/About'
import ExclusiveClients from '@/components/ExclusiveClients'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'MG Corporation - Automation | Garments | Construction',
  description: 'MG Corporation, a diversified conglomerate in Coimbatore, offers expert solutions in industrial automation (MG Industries), apparel manufacturing (MG Garments), and construction services (MG Construction).',
  keywords: 'MG Corporation, Coimbatore, industrial automation, apparel manufacturing, construction services, jigs and fixtures, custom apparel, industrial plants',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <ExclusiveClients />
      <Contact />
    </main>
  )
}
