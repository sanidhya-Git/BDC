"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

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

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-red-50/30 to-white overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Witness the impact of blood donation through moments captured at our donation camps and community events.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedImages.map((image, index) => (
            <motion.div key={image.id} variants={itemVariants}>
              <motion.div
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-muted shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-white font-semibold text-lg md:text-xl">{image.title}</h3>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {!showAll && galleryImages.length > 6 && (
          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 shadow-md shadow-primary/20"
            >
              View More
            </Button>
          </motion.div>
        )}

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 md:p-10"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-primary transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <X className="h-8 w-8 md:h-10 md:w-10" />
              </motion.button>
              <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={displayedImages[selectedImage].src || "/placeholder.svg"}
                  alt={displayedImages[selectedImage].alt}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <motion.p
                  className="text-white text-center mt-6 text-lg md:text-xl font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {displayedImages[selectedImage].title}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
