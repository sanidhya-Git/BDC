"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Heart, Coffee, Award } from "lucide-react"
import { motion } from "framer-motion"

export function DonationProcess() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Registration",
      description: "Quick health check and simple registration process to ensure you're ready to donate.",
      duration: "10 min",
    },
    {
      icon: Heart,
      title: "Donation",
      description: "Relax while our trained staff safely collects your life-saving donation.",
      duration: "10 min",
    },
    {
      icon: Coffee,
      title: "Refreshments",
      description: "Enjoy snacks and drinks while you rest and recover after your donation.",
      duration: "15 min",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Receive updates on your impact and earn recognition for your heroic contribution.",
      duration: "Ongoing",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Simple <span className="text-primary">4-Step Process</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Donating blood is quick, easy, and safe. Here's what to expect during your visit
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="relative h-full border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="mt-6 mb-4">
                      <motion.div
                        className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <step.icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="font-bold text-xl mb-3 text-balance">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {step.duration}
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
