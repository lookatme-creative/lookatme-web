"use client"

import React, { useRef, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  role: string
  service: string
  quote: string
  img: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Azka Salsabila",
    role: "Mahasiswi",
    service: "Web Design and Development",
    quote: "Dari awal udah yakin karena portofolionya cakep. Tapi waktu website saya jadi, tampilannya beneran profesional dan responsif di semua device. Plus, proses komunikasinya enak dan cepat!",
    img: "/images/azka.jpeg"
  },
  {
    id: 2,
    name: "Wielino",
    role: "Youtuber",
    service: "Design Poster",
    quote: "Serius, desainnya keren parah! Langsung dipajang di venue dan banyak yang foto-foto di depan poster. Feel-nya dapet banget, padahal cuma kasih konsep seadanya.",
    img: "/images/wielino.jpg"
  },
  {
    id: 3,
    name: "Agus",
    role: "Wirausahawan",
    service: "Icon Pack",
    quote: "Icon pack-nya clean dan konsisten banget. Bener-bener ngebantu ningkatin tampilan UI project saya jadi lebih hidup dan user-friendly. Worth every penny",
    img: "/images/agus.jpg"
  },
  {
    id: 4,
    name: "Rama",
    role: "Wirausahawan",
    service: "Design Apparel",
    quote: "Desain posternya bikin orang langsung berhenti scrolling! Warna, komposisi, dan tipografinya pas banget. Langsung ningkatin engagement event kita di IG sampai 2x lipat. Mantap!",
    img: "/images/someone.jpg"
  },
  {
    id: 5,
    name: "Juminten",
    role: "Mahasiswi",
    service: "Design Logo",
    quote: "Awalnya saya cuma kasih brief singkat aja, tapi hasil logonya benar-benar di luar ekspektasi. Simpel, elegan, dan bisa langsung mewakili identitas brand saya. Terima kasih udah bisa translate ide saya ke visual yang keren banget!",
    img: "/images/juminten.jpg"
  }
]

interface TestimonialsSectionProps {
  currentLocale: string
}

export default function TestimonialsSection({ currentLocale }: TestimonialsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const nextIndex = (activeIndex + 1) % testimonials.length
        setActiveIndex(nextIndex)
        const cardWidth = scrollContainerRef.current.offsetWidth
        scrollContainerRef.current.scrollTo({
          left: cardWidth * nextIndex,
          behavior: 'smooth'
        })
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  // Manual scroll handling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      scrollContainer.classList.add("active")
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseUp = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - startX) * 2
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    scrollContainer.addEventListener("mousedown", handleMouseDown)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("mouseup", handleMouseUp)
    scrollContainer.addEventListener("mousemove", handleMouseMove)

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      scrollContainer.removeEventListener("mouseup", handleMouseUp)
      scrollContainer.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {currentLocale === "id" ? "Testimoni Klien" : "Client Testimonials"}
        </h2>
        
        {/* Testimonials Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 cursor-grab select-none hide-scrollbar snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-none w-full md:w-[600px] bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl snap-center mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm mt-1">{testimonial.service}</p>
                    <blockquote className="text-gray-700 italic mt-4 leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.offsetWidth
                    scrollContainerRef.current.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    })
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-black w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
