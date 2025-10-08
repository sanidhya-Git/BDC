"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Donor",
      image: "/smiling-woman-portrait.png",
      quote:
        "Donating blood has become a meaningful part of my life. Knowing that my donation can save up to three lives makes every visit worthwhile.",
      donations: 12,
    },
    {
      name: "Michael Chen",
      role: "First-Time Donor",
      image: "/smiling-man-portrait.png",
      quote:
        "I was nervous at first, but the staff made me feel comfortable. The whole process was quick and easy. I'm already planning my next donation!",
      donations: 1,
    },
    {
      name: "Emily Rodriguez",
      role: "Recipient's Family",
      image: "/grateful-woman-portrait.jpg",
      quote:
        "Blood donors saved my daughter's life during her surgery. I can't thank the donors enough. You are all heroes in our eyes.",
      donations: 0,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Real experiences from donors and families whose lives have been touched
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    </motion.div>
                    <p className="text-muted-foreground mb-6 text-pretty leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover border-2 border-primary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        {testimonial.donations > 0 && (
                          <div className="text-xs text-primary font-semibold mt-1">
                            {testimonial.donations} donations
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
