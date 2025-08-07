import Link from 'next/link'
import { ArrowRight, Cog, Shirt, Building, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const divisions = [
  {
    id: 'industries',
    title: 'MG Industries',
    tagline: "Tamil Nadu's Premier Automation Partner",
    icon: Cog,
    address: 'No. 4/141, Pattanam, Coimbatore – 641016',
    phone: '+91-94899-88220',
    email: 'industries@mggroup.com',
    services: ['Jigs & Fixtures', 'SPMs', 'Welding & Testing Machines', 'Conveyor Systems'],
    href: '/industries'
  },
  {
    id: 'garments',
    title: 'MG Garments',
    tagline: 'From Fabric to Fashion, with Passion',
    icon: Shirt,
    address: 'Suganthi Complex, Thanneerpandal, Coimbatore – 641004',
    phone: '+91-94899-88220 / +91-88254-45672',
    email: 'garments@mggroup.com',
    services: ['T-shirts & Polos', 'Sweatshirts & Hoodies', 'Screen Printing', 'DTG & Sublimation'],
    href: '/garments'
  },
  {
    id: 'construction',
    title: 'MG Construction',
    tagline: 'Building Future-Ready Infrastructure',
    icon: Building,
    address: 'No. 12/45, Industrial Estate Road, Pattanam, Coimbatore – 641016',
    phone: '+91-94899-88220',
    email: 'construction@mggroup.com',
    services: ['Industrial Plants', 'Commercial Buildings', 'Civil Works', 'Green Solutions'],
    href: '/construction'
  }
]

export default function Divisions() {
  return (
    <section id="divisions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter text-gray-900 mb-4">
            Our Divisions
          </h2>
          <p className="text-lg text-gray-600 font-roboto">
            Three specialized divisions working together to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon
            return (
              <div
                key={division.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden animate-slide-in-up border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card Header with Gradient */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-inter mb-2">
                      {division.title}
                    </h3>
                    <p className="text-blue-100 font-medium font-roboto">
                      {division.tagline}
                    </p>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <div className="space-y-3 mb-6 text-sm text-gray-600">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="font-roboto">{division.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <p className="font-roboto">{division.phone}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <p className="font-roboto">{division.email}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-semibold text-blue-900 text-xs">GST (MG Corporation): 33ANAPY7797H1ZB</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 font-inter">Key Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {division.services.map((service, idx) => (
                        <div key={idx} className="flex items-center bg-gray-50 p-2 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-700 font-roboto">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={division.href}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group-hover:shadow-lg transition-all duration-300 rounded-xl py-3 font-semibold">
                      Explore Division
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
