import { Metadata } from 'next'
import Image from 'next/image'
import { Star, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const metadata: Metadata = {
  title: 'MG Garments - From Fabric to Fashion, with Passion | MG Corporation',
  description: 'MG Garments, part of MG Corporation, offers premium T-shirts, Polos, Sweatshirts, Hoodies with Screen Printing, DTG, and Sublimation services in Coimbatore.',
}

const products = [
  { 
    name: 'Premium T-Shirts', 
    image: '/images/garments/tshirts.png', 
    description: 'High-quality cotton t-shirts in white and blue with professional MG GARMENTS branding' 
  },
  { 
    name: 'Polo Shirts', 
    image: '/images/garments/polos.png', 
    description: 'Professional polo shirts perfect for corporate and casual wear' 
  },
  { 
    name: 'Sweatshirts', 
    image: '/images/garments/sweatshirts.png', 
    description: 'Comfortable sweatshirts in classic white and navy blue colors' 
  },
  { 
    name: 'Hoodies', 
    image: '/images/garments/hoodies.png', 
    description: 'Stylish hoodies with kangaroo pockets and premium fabric quality' 
  },
]

export default function GarmentsPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section with Real Product Image */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-900 to-pink-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <Image
          src="/images/garments/hero-lineup.png"
          alt="MG Garments Product Lineup"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold font-inter mb-4">
              MG Garments
            </h1>
            <p className="text-xl font-roboto">
              From Fabric to Fashion, with Passion
            </p>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-inter text-gray-900 mb-12">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 font-roboto">Premium quality materials and craftsmanship</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">Value</h3>
              <p className="text-gray-600 font-roboto">Competitive pricing without compromising quality</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">Swift Arrival</h3>
              <p className="text-gray-600 font-roboto">Fast delivery and reliable service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Real Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-inter text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-roboto text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-inter text-gray-900 mb-12">
            Printing & Embroidery Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">Screen Printing</h3>
              <p className="text-gray-600 font-roboto">High-quality screen printing for bulk orders with vibrant colors and long-lasting durability</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">DTG Printing</h3>
              <p className="text-gray-600 font-roboto">Direct-to-garment printing for detailed designs and photographic quality prints</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
              <h3 className="text-xl font-bold font-inter text-gray-900 mb-4">Sublimation</h3>
              <p className="text-gray-600 font-roboto">Vibrant sublimation printing for polyester garments with all-over design capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold font-inter text-gray-900 text-center mb-8">
              Request a Quote
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Email Address" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Company Name" />
                <Input placeholder="Product Type" />
              </div>
              <Input placeholder="Quantity Required" />
              <Textarea placeholder="Additional Requirements" rows={4} />
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 font-roboto">Upload Artwork (Optional)</p>
                <p className="text-sm text-gray-500 mt-1">Supports JPG, PNG, PDF up to 10MB</p>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold">
                Submit Quote Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
