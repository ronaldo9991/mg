import Image from 'next/image'

const clients = [
  {
    name: 'Kumaraguru College of Technology',
    logo: '/images/clients/kumaraguru-college.png',
    category: 'Education'
  },
  {
    name: 'LMW',
    logo: '/images/clients/lmw-logo.png',
    category: 'Manufacturing'
  },
  {
    name: 'Forge',
    logo: '/images/clients/forge-logo.png',
    category: 'Manufacturing'
  },
  {
    name: 'Suganthi Steels',
    logo: '/images/clients/suganthi-steels.png',
    category: 'Steel & Construction'
  },
  {
    name: 'Prime Enterprises',
    logo: '/images/clients/prime-enterprises.png',
    category: 'Industrial'
  },
  {
    name: 'SASI Creative School of Architecture',
    logo: '/images/clients/sasi-creative.png',
    category: 'Education'
  }
]

export default function ExclusiveClients() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold font-inter mb-6">
            <span className="text-blue-600">Exclusive</span> <span className="text-gray-900">Clients</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-roboto max-w-3xl mx-auto leading-relaxed">
            We are proud to partner with industry leaders, prestigious educational institutions, and innovative companies 
            across Tamil Nadu. Our commitment to excellence has earned us the trust of organizations that demand the highest 
            standards in automation, apparel, and construction services.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={96}
                    height={96}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 font-roboto">{client.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 font-bold text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Educational Excellence</h3>
            <p className="text-gray-600 font-roboto">
              Leading colleges and schools trust our quality garments and construction services for their institutional needs.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 font-bold text-2xl">🏭</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Industrial Leaders</h3>
            <p className="text-gray-600 font-roboto">
              Manufacturing giants and steel companies choose our precision automation solutions and industrial expertise.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 font-bold text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">Construction & Architecture</h3>
            <p className="text-gray-600 font-roboto">
              Architects and builders rely on our construction expertise and sustainable building practices.
            </p>
          </div>
        </div>

        {/* Partnership Statement */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
              Building Lasting Partnerships
            </h3>
            <p className="text-gray-700 font-roboto leading-relaxed">
              Our client relationships span across diverse sectors including education, manufacturing, steel production, 
              and architecture. Each partnership is built on our core values of quality, reliability, and innovation. 
              From Kumaraguru College's educational excellence to LMW's manufacturing prowess, we are honored to 
              contribute to their success stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
