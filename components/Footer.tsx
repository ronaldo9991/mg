import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Garments', href: '/garments' },
    { name: 'Construction', href: '/construction' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy', href: '/privacy' },
  ]

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/mg-logo.png"
                alt="MG Corporation Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-inter font-bold text-xl text-white">MG Corporation</span>
            </div>
            <p className="text-blue-100 mb-4 font-roboto leading-relaxed">
              Engineering Excellence | Fabric to Fashion | Smart Construction
            </p>
            <div className="bg-blue-800 p-3 rounded-lg">
              <p className="text-blue-200 text-sm font-semibold">
                GST: 33ANAPY7797H1ZB
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 font-roboto"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-inter font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-2 text-blue-200 text-sm font-roboto mb-4">
              <p>No. 4/141, Pattanam</p>
              <p>Coimbatore – 641016</p>
              <p>+91-94899-88220</p>
              <p>info@mggroup.com</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/mg-garments"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm font-roboto">
            © 2025 MG Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
