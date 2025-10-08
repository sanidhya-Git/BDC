"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/blood-donation-camp-with-volunteers.jpg",
    alt: "Blood donation camp",
    title: "Community Blood Drive",
  },
  {
    id: 2,
    src: "/medical-staff-collecting-blood-donation.jpg",
    alt: "Medical staff with donor",
    title: "Professional Care",
  },
  {
    id: 3,
    src: "/happy-blood-donor-smiling-after-donation.jpg",
    alt: "Happy donor",
    title: "Making a Difference",
  },
  {
    id: 4,
    src: "/group-of-blood-donors-together.jpg",
    alt: "Group of donors",
    title: "Heroes Together",
  },
  {
    id: 5,
    src: "/blood-donation-awareness-event.jpg",
    alt: "Awareness event",
    title: "Spreading Awareness",
  },
  {
    id: 6,
    src: "/blood-donation-certificate-ceremony.jpg",
    alt: "Recognition ceremony",
    title: "Honoring Donors",
  },
]

export function CircularGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [rotation, setRotation] = useState(0)

  const radius = 280
  const centerX = 0
  const centerY = 0

  const handleNext = () => {
    setRotation((prev) => prev - 60)
  }

  const handlePrev = () => {
    setRotation((prev) => prev + 60)
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-red-50/30 overflow-hidden">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Witness the impact of blood donation through moments captured at our donation camps and events
          </p>
        </motion.div>

        {/* Circular Gallery */}
        <div className="relative h-[600px] flex items-center justify-center">
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {galleryImages.map((image, index) => {
              const angle = (index * 60 + rotation) * (Math.PI / 180)
              const x = centerX + radius * Math.cos(angle)
              const y = centerY + radius * Math.sin(angle)
              const scale = 0.7 + 0.3 * Math.cos(angle)
              const zIndex = Math.round(50 + 50 * Math.cos(angle))

              return (
                <motion.div
                  key={image.id}
                  className="absolute cursor-pointer"
                  style={{
                    x,
                    y,
                    scale,
                    zIndex,
                  }}
                  animate={{
                    x,
                    y,
                    scale,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: scale * 1.1 }}
                >
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-4 shadow-xl z-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary rounded-full p-4 shadow-xl z-50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <X className="h-10 w-10" />
              </motion.button>
              <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <motion.p
                  className="text-white text-center mt-6 text-xl font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {galleryImages[selectedImage].title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
