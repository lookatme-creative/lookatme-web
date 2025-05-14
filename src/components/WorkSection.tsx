"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface Work {
  id: number
  title: string
  category: string
  image: string
  description: {
    id: string
    en: string
  }
}

const works: Work[] = [
  {
    id: 1,
    title: "Tech Startup",
    category: "Logo Design",
    image: "/images/startup.jpg",
    description: {
      id: "Desain identitas merek yang mencerminkan nilai dan visi perusahaan dengan pendekatan modern dan minimalis.",
      en: "Brand identity design that reflects company values and vision with a modern, minimalist approach."
    }
  },
  {
    id: 2,
    title: "Food and Drink",
    category: "Design Poster",
    image: "/images/makan.jpg",
    description: {
      id: "Poster media sosial yang menarik dan efektif untuk meningkatkan engagement.",
      en: "Attractive and effective social media posters to increase engagement."
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "/images/portofolio.jpg",
    description: {
      id: "Website Portofolio responsif dengan pengalaman pengguna yang optimal dan desain yang menarik.",
      en: "Responsive Portfolio website with optimal user experience and attractive design."
    }
  },
  {
    id: 4,
    title: "Fashion Mockup",
    category: "Design Apparel",
    image: "/images/hectic.jpg",
    description: {
      id: "Desain pakaian yang skena dan eye-catching.",
      en: "Fashionable and eye-catching clothing designs."
    }
  },
  {
    id: 5,
    title: "Ventela Shoes",
    category: "Design Poster",
    image: "/images/ventela public low finals.jpg",
    description: {
      id: "Desain Poster Sepatu yang cocok dengan Dreamy look.",
      en: "Shoe Poster Design that matches the Dreamy look."
    }
  },
  {
    id: 6,
    title: "Icon Pack",
    category: "Design Icons",
    image: "/images/icon_all_collection.jpg",
    description: {
      id: "Icon-icon fun, lucu, dan spesial semua ada.",
      en: "Fun, cute, and special icons are all there."
    }
  },
    {
    id: 7,
    title: "Safety First",
    category: "Design Poster",
    image: "/images/poster pama.jpg",
    description: {
      id: "Waspada Insiden Amblas.",
      en: "Beware of Landslide Incidents."
    }
  },
]

const categoryTranslations: Record<string, { id: string; en: string }> = {
  "All": { id: "Semua", en: "All" },
  "Logo Design": { id: "Desain Logo", en: "Logo Design" },
  "Digital Marketing": { id: "Pemasaran Digital", en: "Digital Marketing" },
  "Web Design": { id: "Desain Web", en: "Web Design" },
  "Packaging Design": { id: "Desain Kemasan", en: "Packaging Design" },
  "UI/UX Design": { id: "Desain UI/UX", en: "UI/UX Design" },
  "Brand Design": { id: "Desain Merek", en: "Brand Design" }
}

interface WorkSectionProps {
  currentLocale: string
}

export default function WorkSection({ currentLocale }: WorkSectionProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(works)
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const modalRef = useRef<HTMLDivElement>(null)

  const categories = ["All", ...Array.from(new Set(works.map((work) => work.category)))]

  // Filter works by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredWorks(works)
    } else {
      setFilteredWorks(works.filter((work) => work.category === activeCategory))
    }
  }, [activeCategory])

  // Close modal on ESC key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedWork(null)
      }
    }
    if (selectedWork) {
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedWork])

  // Focus trap in modal
  useEffect(() => {
    if (selectedWork && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      function handleFocus(event: KeyboardEvent) {
        if (event.key !== "Tab") return

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault()
            firstElement.focus()
          }
        }
      }

      document.addEventListener("keydown", handleFocus)
      firstElement?.focus()

      return () => {
        document.removeEventListener("keydown", handleFocus)
      }
    }
  }, [selectedWork])

  return (
    <section id="work" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {currentLocale === "id" ? "Karya Kami" : "Our Work"}
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
              aria-pressed={activeCategory === category}
            >
              {currentLocale === "id"
                ? categoryTranslations[category]?.id ?? category
                : categoryTranslations[category]?.en ?? category}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedWork(work)
                }
              }}
              role="button"
              aria-label={`${work.title} - ${work.category}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative rounded-2xl">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl pointer-events-none">
                <h3 className="text-xl font-semibold text-white mb-1">{work.title}</h3>
                <p className="text-sm text-gray-300">{work.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Work Modal */}
        {selectedWork && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedWork(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full p-0 overflow-hidden transform transition-transform duration-300 scale-100 animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              tabIndex={-1}
            >
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 id="modal-title" className="text-2xl font-bold mb-2">
                  {selectedWork.title}
                </h3>
                <p className="text-blue-600 mb-4">{selectedWork.category}</p>
                <p id="modal-description" className="text-gray-600 leading-relaxed">
                  {currentLocale === "id"
                    ? selectedWork.description.id
                    : selectedWork.description.en}
                </p>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {currentLocale === "id" ? "Tutup" : "Close"}
                </button>
                <button
                  onClick={() => setSelectedWork(null)}
                  className="ml-4 mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {currentLocale === "id" ? "Jelajahi Lebih Banyak" : "Explore More"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
