import { Metadata } from 'next'
import Image from 'next/image'
import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'MG Industries - Tamil Nadu\'s Premier Automation Partner | MG Corporation',
  description: 'MG Industries, part of MG Corporation, specializes in Jigs & Fixtures, SPMs, Welding & Testing Machines, Conveyor Systems in Coimbatore.',
}

const services = [
  'Jigs & Fixtures Design and Manufacturing',
  'Special Purpose Machines (SPMs)',
  'Welding & Testing Machines',
  'Conveyor Systems',
  'Industrial Automation Solutions',
  'Custom Manufacturing Equipment'
]

const gallery = [
  { 
    src: '/images/industries/vertical hydroponic growing system.png', 
    alt: 'Vertical Hydroponic Growing System',
    title: 'Vertical Hydroponic Growing System'
  },
  { 
    src: '/images/industries/Vertical Milling Station.png', 
    alt: 'Vertical Milling Station',
    title: 'Vertical Milling Station'
  },
  { 
    src: '/images/industries/assembly station.png', 
    alt: 'Assembly Station',
    title: 'Assembly Station'
  },
  { 
    src: '/images/industries/Vertical Milling System.png', 
    alt: 'Vertical Milling System',
    title: 'Vertical Milling System'
  },
  { 
    src: '/images/industries/modular aluminum workstation.png', 
    alt: 'Modular Aluminum Workstation',
    title: 'Modular Aluminum Workstation'
  }
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <Image
          src="/images/industries/cover-picture.png"
          alt="MG Industries Manufacturing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold font-inter mb-4">
              MG Industries
            </h1>
            <p className="text-xl font-roboto">
              Tamil Nadu's Premier Automation Partner
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-inter text-gray-900 mb-6">
              Engineering Excellence in Automation
            </h2>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              MG Industries stands at the forefront of industrial automation in Tamil Nadu. 
              With cutting-edge technology and precision engineering, we deliver custom solutions 
              that enhance productivity and efficiency across various manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold font-inter text-gray-900 mb-4">
                Our Expertise
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-roboto">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold font-inter text-gray-900 mb-4">
                Why Choose MG Industries?
              </h3>
              <ul className="space-y-3 text-gray-700 font-roboto">
                <li>• Precision engineering and quality assurance</li>
                <li>• Custom solutions tailored to your needs</li>
                <li>• Experienced team of engineers and technicians</li>
                <li>• Timely delivery and competitive pricing</li>
                <li>• Comprehensive after-sales support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-12">
            Our Work Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 w-full bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 font-inter">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold font-inter text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-roboto">
                      No. 4/141, Pattanam, Coimbatore – 641016
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-roboto">+91-94899-88220</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-roboto">industries@mggroup.com</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mb-4">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
