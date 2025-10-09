import {Header} from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CircularGallery } from "@/components/circular-gallery"

import { Footer } from "@/components/footer"
import {Donatedetails} from "@/components/Donatedetails"  

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Donatedetails/>        
        <CircularGallery />

      </main>
      <Footer />
    </div>
  )
}
