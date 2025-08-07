"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ContactModal from './ContactModal'
import { ArrowDown, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#007BFF" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007BFF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Enhanced Animated Gears */}
          <g className="animate-spin" style={{ transformOrigin: '200px 150px', animationDuration: '30s' }}>
            <circle cx="200" cy="150" r="60" fill="none" stroke="url(#gearGradient)" strokeWidth="3"/>
            <circle cx="200" cy="150" r="35" fill="none" stroke="url(#gearGradient)" strokeWidth="2"/>
            {/* Gear teeth */}
            {[...Array(8)].map((_, i) => (
              <rect key={i} x="195" y="85" width="10" height="15" fill="url(#gearGradient)" 
                    transform={`rotate(${i * 45} 200 150)`} />
            ))}
          </g>
          
          <g className="animate-spin" style={{ transformOrigin: '1000px 250px', animationDuration: '25s', animationDirection: 'reverse' }}>
            <circle cx="1000" cy="250" r="50" fill="none" stroke="url(#gearGradient)" strokeWidth="3"/>
            <circle cx="1000" cy="250" r="30" fill="none" stroke="url(#gearGradient)" strokeWidth="2"/>
            {[...Array(6)].map((_, i) => (
              <rect key={i} x="995" y="195" width="10" height="15" fill="url(#gearGradient)" 
                    transform={`rotate(${i * 60} 1000 250)`} />
            ))}
          </g>

          {/* Enhanced Blueprint Lines */}
          <path d="M100 400 Q600 200 1100 500" stroke="url(#gearGradient)" strokeWidth="2" fill="none" 
                className="animate-pulse" strokeDasharray="10,5"/>
          <path d="M200 600 Q700 300 1000 400" stroke="url(#gearGradient)" strokeWidth="2" fill="none" 
                className="animate-pulse" strokeDasharray="15,10" style={{ animationDelay: '1s' }}/>
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-cyan-100 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Logo Integration */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/mg-logo.png"
              alt="MG Group Logo"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter text-gray-900 mb-4 leading-tight">
            MG Corporation
          </h1>
          
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-3 font-roboto font-light">
              Engineering Excellence
            </p>
            <div className="flex items-center justify-center space-x-4 text-base sm:text-lg text-gray-600">
              <span>Fabric to Fashion</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Smart Construction</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
            >
              Discover Our Story
              <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
            </Button>
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform bg-white/80 backdrop-blur-sm"
            >
              Get In Touch
              <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
