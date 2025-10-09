"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Heart, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Heart, label: "Lives Saved", value: "50,000+" },
    { icon: Users, label: "Active Donors", value: "25,000+" },
    { icon: Award, label: "Years of Service", value: "15+" },
    { icon: Target, label: "Blood Camps", value: "500+" },
  ]

  const values = [
    {
      title: "Our Mission",
      description:
        "To create a sustainable blood donation ecosystem that ensures no patient suffers due to blood shortage. We connect willing donors with those in need, making the donation process simple, safe, and rewarding.",
      icon: Target,
    },
    {
      title: "Our Vision",
      description:
        "A world where every person has access to safe blood when they need it. We envision a community of regular donors who understand the life-saving impact of their contribution.",
      icon: Heart,
    },
    {
      title: "Our Values",
      description:
        "Compassion, integrity, and excellence guide everything we do. We believe in transparency, donor safety, and building lasting relationships with our community of heroes.",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-red-50/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-red-600">BDC</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We are dedicated to saving lives through blood donation. Every drop counts, and every donor is a hero in
                our mission to ensure no one suffers from blood shortage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="h-8 w-8 text-red-600" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="h-7 w-7 text-red-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Our <span className="text-red-600">Story</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    LifeFlow was founded in 2009 with a simple yet powerful mission: to bridge the gap between blood
                    donors and those in need. What started as a small community initiative has grown into a nationwide
                    movement, touching thousands of lives every year.
                  </p>
                  <p>
                    We recognized that while many people want to donate blood, they often don't know where to go or when
                    their donation is needed most. At the same time, hospitals and patients face critical shortages.
                    LifeFlow was created to solve this problem by making blood donation accessible, convenient, and
                    rewarding.
                  </p>
                  <p>
                    Today, we work with hundreds of hospitals, organize regular blood donation camps, and maintain a
                    community of dedicated donors who have collectively saved over 50,000 lives. Every donation through
                    LifeFlow is a testament to the power of human compassion and community spirit.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Join us in our mission to ensure that no life is lost due to blood shortage. Together, we can make a
                    difference, one donation at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
