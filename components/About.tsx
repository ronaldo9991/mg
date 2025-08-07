import { CheckCircle, Calendar, MapPin, Award, Users, Target, Cog, Shirt, Building, Phone, Mail, ArrowRight, Factory, Zap, Shield, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const whyChooseUs = [
  {
    title: 'Integrated Expertise',
    description: 'Deep technical know-how across automation, textiles, and construction means we understand your project holistically.',
    icon: Target
  },
  {
    title: 'Quality Commitment',
    description: 'Rigorous quality control at every stage—from CAD design and prototyping to final delivery.',
    icon: Award
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Dedicated account managers, flexible order quantities, and private-label solutions ensure your unique needs are met.',
    icon: Users
  },
  {
    title: 'Timely Delivery',
    description: 'Punctual turnkey execution, backed by transparent communication and real-time project tracking.',
    icon: CheckCircle
  },
  {
    title: 'Innovation Focus',
    description: 'Continuous investment in latest technology and R&D to stay ahead of industry trends.',
    icon: Zap
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly fabric options and green-building practices support a healthier planet.',
    icon: Globe
  }
]

const companyStats = [
  { label: 'Years of Excellence', value: '6+', description: 'Since 2019' },
  { label: 'Divisions', value: '3', description: 'Specialized sectors' },
  { label: 'Happy Clients', value: '100+', description: 'Across Tamil Nadu' },
  { label: 'Projects Completed', value: '500+', description: 'Successful deliveries' }
]

const achievements = [
  {
    title: 'Industry Recognition',
    description: 'Recognized as a leading automation partner by major manufacturing companies in Tamil Nadu.',
    icon: Award
  },
  {
    title: 'Quality Certifications',
    description: 'ISO certified processes ensuring international quality standards in all our operations.',
    icon: Shield
  },
  {
    title: 'Innovation Hub',
    description: 'State-of-the-art R&D facility developing next-generation automation and construction solutions.',
    icon: Factory
  },
  {
    title: 'Regional Leadership',
    description: 'Expanding footprint across South India with strategic partnerships and new facility developments.',
    icon: Globe
  }
]

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
    description: 'As Tamil Nadu\'s premier industrial automation partner, MG Industries specializes in precision-engineered jigs, fixtures, and special-purpose machines. From automotive inspection fixtures and ultrasonic welding setups to advanced conveyor systems and leak-testing rigs, we deliver turnkey automation solutions that boost productivity, ensure accuracy, and reduce cycle times for manufacturers across automotive, aerospace, and general industry.',
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
    description: 'Under the motto "From Fabric to Fashion, with Passion," MG Garments provides high-quality, bulk apparel manufacturing and custom-printing services. Our product range spans T-shirts, polo shirts, hoodies, and sweatshirts—available in cotton, polyester, blends, and organic fabrics. Leveraging screen printing, DTG, sublimation, and embroidery, we serve corporate events, educational institutions, and retail brands.',
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
    description: 'Established to meet the growing infrastructure needs of our region, MG Construction delivers end-to-end building services—from industrial plant erection and civil works to commercial complexes and sustainable "green" design. Our project management team handles planning, budgeting, safety compliance, and on-site execution, ensuring every structure is built to last.',
    href: '/construction'
  }
]

export default function About() {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-inter text-gray-900 mb-6 leading-tight">
            About <span className="text-blue-600">MG Corporation</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed font-roboto mb-6">
              <span className="font-semibold">MG Group of Companies—operating as MG Corporation—</span>is a diversified conglomerate 
              headquartered in Coimbatore, Tamil Nadu, united under a single GST registration 
              <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mx-2">33ANAPY7797H1ZB</span>.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-roboto">Founded in 2019</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-roboto">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
            
            <p className="text-base text-gray-600 font-roboto leading-relaxed mb-6">
              Since our founding in 2019, we have built a reputation for innovation, quality, and customer focus 
              across three synergistic divisions, serving clients throughout Tamil Nadu and beyond. Our integrated 
              approach allows us to provide comprehensive solutions that span from precision manufacturing to 
              sustainable construction, making us a trusted partner for businesses across diverse industries.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-3">Our Journey</h3>
              <p className="text-gray-700 font-roboto leading-relaxed mb-3">
                What started as a vision to create a diversified industrial conglomerate has evolved into Tamil Nadu's 
                most trusted multi-sector corporation. From our humble beginnings in 2019, we have consistently expanded 
                our capabilities, invested in cutting-edge technology, and built lasting relationships with clients who 
                value quality, reliability, and innovation.
              </p>
              <p className="text-gray-700 font-roboto leading-relaxed">
                Today, MG Corporation stands as a testament to entrepreneurial excellence, combining traditional business 
                values with modern technological capabilities. Our three divisions work in perfect synergy, often 
                collaborating on complex projects that require multi-disciplinary expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Our Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-inter text-gray-900 mb-3">
              Our Achievements
            </h3>
            <p className="text-base text-gray-600 font-roboto max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={achievement.title} className="text-center p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="text-base font-bold font-inter text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 font-roboto text-sm leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Divisions - Single Enhanced Section */}
        <div id="divisions" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-inter text-gray-900 mb-3">
              Our Divisions
            </h3>
            <p className="text-base text-gray-600 font-roboto max-w-3xl mx-auto">
              Three specialized divisions working together to deliver comprehensive solutions across 
              automation, apparel manufacturing, and construction sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => {
              const Icon = division.icon
              return (
                <div
                  key={division.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-slide-in-up border border-gray-100 h-full flex flex-col"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Card Header with Gradient */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold font-inter mb-2">
                        {division.title}
                      </h4>
                      <p className="text-blue-100 font-medium font-roboto text-sm">
                        {division.tagline}
                      </p>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-700 font-roboto leading-relaxed mb-4 text-sm flex-1">
                      {division.description}
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-2 mb-4 text-xs text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="font-roboto">{division.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <p className="font-roboto">{division.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <p className="font-roboto">{division.email}</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <p className="font-semibold text-blue-900 text-xs">GST: 33ANAPY7797H1ZB</p>
                      </div>
                    </div>
                    
                    {/* Key Services */}
                    <div className="mb-4">
                      <h5 className="font-bold text-gray-900 mb-3 font-inter text-sm">Key Services</h5>
                      <div className="grid grid-cols-1 gap-1">
                        {division.services.map((service, idx) => (
                          <div key={idx} className="flex items-center bg-gray-50 p-2 rounded-lg">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                            <span className="text-xs text-gray-700 font-roboto">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link href={division.href} className="mt-auto">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group-hover:shadow-lg transition-all duration-300 rounded-lg py-2 font-semibold text-sm">
                        Explore Division
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Why Choose MG Corporation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-inter text-gray-900 mb-3">
              Why Choose MG Corporation?
            </h3>
            <p className="text-base text-gray-600 font-roboto max-w-3xl mx-auto">
              Our integrated approach, commitment to quality, and customer-centric philosophy set us apart 
              in the competitive landscape of Tamil Nadu's industrial sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold font-inter text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 font-roboto leading-relaxed text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-3xl">
            <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              To be Tamil Nadu's most trusted diversified conglomerate, delivering innovative solutions across 
              automation, textiles, and construction while maintaining the highest standards of quality, 
              sustainability, and customer satisfaction. We strive to contribute meaningfully to our region's 
              industrial growth and economic development through integrated expertise and unwavering commitment to excellence.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-3xl">
            <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 font-roboto leading-relaxed text-sm">
              To expand our integrated expertise across South India, becoming the preferred partner for 
              businesses seeking comprehensive solutions in industrial automation, premium apparel manufacturing, 
              and sustainable construction. We envision a future where MG Corporation is synonymous with 
              innovation, reliability, and excellence, setting new benchmarks in multi-sector industrial leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
