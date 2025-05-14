"use client"

interface HeroSectionProps {
  currentLocale: string
}

export default function HeroSection({ currentLocale }: HeroSectionProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(-45deg, #4a90e2, #000000, #4a90e2)',
          backgroundSize: '400% 400%',
          animation: 'gradient-x 15s ease infinite'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Lookatme
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
          {currentLocale === "id" 
            ? "Lihat Perbedaannya, Jadilah Perbedaan" 
            : "See The Difference, Be The Difference"}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 text-lg font-medium min-w-[200px] transform hover:scale-105"
          >
            {currentLocale === "id" ? "Jelajahi Layanan" : "Explore Services"}
          </button>
          <a
            href="https://linktr.ee/lookatme.creative"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium min-w-[200px] transform hover:scale-105"
          >
            {currentLocale === "id" ? "Dapatkan" : "Grab It"}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white opacity-75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Optional: Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </section>
  )
}
