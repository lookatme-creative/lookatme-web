"use client"

import React, { useState } from "react"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  details: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Icon Pack",
    description: "Custom icon sets that elevate your brand identity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    details: "Professional icon pack design service tailored to your brand's unique identity. Perfect for apps, websites, and digital platforms. We create cohesive, scalable, and memorable icon sets that enhance user experience."
  },
  {
    id: 2,
    title: "Poster",
    description: "Eye-catching designs that demand attention",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M8 7h8M8 12h8M8 17h8" />
      </svg>
    ),
    details: "Creative poster designs that capture attention and convey your message effectively. Ideal for events, promotions, and marketing campaigns. We combine striking visuals with compelling typography to create impactful posters."
  },
  {
    id: 3,
    title: "Desain Web & Pembuatan Website",
    description: "Modern websites that engage and convert",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    details: "End-to-end web design and development services. We create responsive, user-friendly websites that look great on all devices. From concept to deployment, we handle every aspect of bringing your web presence to life."
  },
  {
    id: 4,
    title: "Desain Logo",
    description: "Memorable logos that tell your story",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    details: "Strategic logo design that captures your brand's essence. We create timeless, versatile logos that work across all mediums. Our process includes thorough research, multiple concepts, and refined iterations."
  },
  {
    id: 5,
    title: "Apparel Design",
    description: "Wearable art that makes a statement",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2v-10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
    details: "Custom apparel designs for merchandise, uniforms, and fashion brands. We create designs that look great on fabric and resonate with your target audience. From concept to print-ready files, we ensure quality at every step."
  }
]

interface ServicesSectionProps {
  currentLocale: string
}

export default function ServicesSection({ currentLocale }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {currentLocale === "id" ? "Layanan Kami" : "Our Services"}
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Service Card Content */}
              <div className="text-center space-y-4">
                <div className="text-gray-800">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-blue-600">Learn More →</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Grab It Button */}
        <div className="text-center mt-16">
          <a
            href="https://linktr.ee/lookatme.creative"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            {currentLocale === "id" ? "Dapatkan" : "Grab It"}
          </a>
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full animate-fadeIn">
              <div className="text-center mb-6">
                <div className="text-gray-800 mb-4">
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.details}</p>
              </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors mt-6"
                >
                  {currentLocale === "id" ? "Tutup" : "Close"}
                </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
