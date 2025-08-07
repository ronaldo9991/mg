import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 font-roboto">
            Get in touch with MG Group for all your business needs
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold font-inter text-gray-900 mb-6 text-center">
            Headquarters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600 text-sm">No. 4/141, Pattanam<br />Coimbatore – 641016</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600 text-sm">+91-94899-88220</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">info@mggroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
