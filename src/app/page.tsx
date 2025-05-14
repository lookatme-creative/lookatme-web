"use client"

import { useState } from "react"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import WorkSection from "../components/WorkSection"
import TestimonialsSection from "../components/TestimonialsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState("id")

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar currentLocale={currentLocale} setCurrentLocale={setCurrentLocale} />
      <HeroSection currentLocale={currentLocale} />
      <ServicesSection currentLocale={currentLocale} />
      <WorkSection currentLocale={currentLocale} />
      <TestimonialsSection currentLocale={currentLocale} />
      <ContactSection currentLocale={currentLocale} />
      <Footer />
    </main>
  )
}
