import { Metadata } from 'next'
import Image from 'next/image'
import { Building, Users, Calendar, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const metadata: Metadata = {
  title: 'MG Construction - Building Future-Ready Infrastructure | MG Corporation',
  description: 'MG Construction, part of MG Corporation, specializes in Industrial Plants, Commercial Buildings, Civil Works, and Green Solutions in Coimbatore since 2023.',
}

const services = [
  {
    title: 'Industrial Plants',
    description: 'Complete industrial facility construction and setup',
    icon: Building
  },
  {
    title: 'Commercial Buildings',
    description: 'Modern commercial spaces and office complexes',
    icon: Building
  },
  {
    title: 'Civil Works',
    description: 'Infrastructure development and civil engineering',
    icon: Building
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management services',
    icon: Users
  },
  {
    title: 'Green Solutions',
    description: 'Sustainable and eco-friendly construction practices',
    icon: Building
  }
]

const stats = [
  { label: 'Projects Completed', value: '2', icon: Building },
  { label: 'Clients Served', value: '2+', icon: Users },
  { label: 'Years of Expertise', value: '2', icon: Calendar }
]

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: '',
    type: 'Residential Construction',
    image: '/images/construction/project1.png'
  },
  {
    id: 2,
    title: 'Project 2',
    description: '',
    type: 'Residential Construction',
    image: '/images/construction/project2.png'
  }
]

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <Image
          src="/images/construction/construction-cover.png"
          alt="MG Construction Projects"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold font-inter mb-4">
              MG Construction
            </h1>
            <p className="text-xl font-roboto">
              Building Future-Ready Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-inter text-gray-900 mb-6">
            Establishing Landmark Projects Since 2023
          </h2>
          <p className="text-lg text-gray-600 font-roboto leading-relaxed">
            MG Construction brings innovation and excellence to every project. From industrial plants 
            to commercial buildings, we deliver infrastructure solutions that stand the test of time. 
            Our commitment to quality, sustainability, and client satisfaction drives us to create 
            landmarks that define the future of construction in Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-roboto">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold font-inter mb-2">{stat.value}</div>
                  <div className="text-lg font-roboto">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-12">
            Our Completed Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 w-full bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <div>
              <h2 className="text-3xl font-bold font-inter text-gray-900 mb-8">
                Get a Quote
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input placeholder="Company Name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Project Type" />
                  <Input placeholder="Location" />
                </div>
                <Textarea placeholder="Project Description" rows={4} required />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Quote Request
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold font-inter text-gray-900 mb-8">
                Our Location
              </h2>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center border-2 border-blue-600">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-600 font-roboto">
                      No. 12/45, Industrial Estate Road<br />
                      Pattanam, Coimbatore – 641016
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
