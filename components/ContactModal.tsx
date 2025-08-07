"use client"

import { useState } from 'react'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fade-in shadow-2xl border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold font-inter text-gray-900 mb-2">
            Contact MG Corporation
          </h3>
          <p className="text-gray-600 font-roboto">
            Let's discuss your requirements
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
            <Input
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
