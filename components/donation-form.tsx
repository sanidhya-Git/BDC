"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Phone, Mail, User, Droplet } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { BloodDropLoader } from "./blood-drop-loader"

export function DonationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    }, 2000)
  }

  return (
    <section id="donate-form" className="py-5 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Register to <span className="text-primary">Donate Blood</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Fill out the form below to schedule your blood donation appointment
            </p>
          </motion.div>

          <motion.div
            className="bg-white border-2 border-red-100 rounded-2xl p-6 md:p-10 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="fullName" className="flex items-center gap-2 text-base">
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </Label>
                  <Input id="fullName" placeholder="John Doe" required className="h-12" />
                </motion.div>

                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="email" className="flex items-center gap-2 text-base">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-12" />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                </motion.div>

                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="bloodType" className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-primary" />
                    Blood Type
                  </Label>
                  <Select required>
                    <SelectTrigger id="bloodType">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a+">A+</SelectItem>
                      <SelectItem value="a-">A-</SelectItem>
                      <SelectItem value="b+">B+</SelectItem>
                      <SelectItem value="b-">B-</SelectItem>
                      <SelectItem value="ab+">AB+</SelectItem>
                      <SelectItem value="ab-">AB-</SelectItem>
                      <SelectItem value="o+">O+</SelectItem>
                      <SelectItem value="o-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Preferred Date
                  </Label>
                  <Input id="date" type="date" required />
                </motion.div>

                <motion.div className="space-y-2" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Preferred Location
                  </Label>
                  <Select required>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown Medical Center</SelectItem>
                      <SelectItem value="westside">Westside Community Hospital</SelectItem>
                      <SelectItem value="eastside">Eastside Blood Bank</SelectItem>
                      <SelectItem value="northside">Northside Health Center</SelectItem>
                      <SelectItem value="southside">Southside Clinic</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <motion.div className="space-y-2" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <Label htmlFor="message">Additional Information (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any medical conditions, allergies, or special requirements we should know about..."
                  rows={4}
                  className="resize-none"
                />
              </motion.div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" required className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I confirm that I am in good health, meet the eligibility criteria, and agree to the terms and
                  conditions of blood donation
                </Label>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg h-14 shadow-lg shadow-primary/20"
                  disabled={loading}
                >
                  {loading ? <BloodDropLoader /> : submitted ? "Registration Submitted!" : "Register for Donation"}
                </Button>
              </motion.div>

              {submitted && (
                <motion.p
                  className="text-center text-sm text-primary font-semibold bg-primary/10 p-4 rounded-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you! We'll contact you shortly to confirm your appointment.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
