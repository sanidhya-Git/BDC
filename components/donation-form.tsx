"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Phone, Mail, User, Droplet, PersonStanding, BookCopy } from "lucide-react"
import { motion } from "framer-motion"
import { BloodDropLoader } from "./blood-drop-loader"

export function DonationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    guardianName: "",
    email: "",
    rollId: "",
    phone: "",
    aadhaar: "",
    bloodType: "",
    roleType: "",
    branch: "",
    dob: "",
    location: "",
    message: "",
    terms: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>({})

  const validate = () => {
    const errs: any = {}

    if (!formData.fullName.trim()) errs.fullName = "Full Name is required"
    if (!formData.guardianName.trim()) errs.guardianName = "Guardian Name is required"

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!formData.email.trim()) errs.email = "Email is required"
    else if (!emailRegex.test(formData.email)) errs.email = "Invalid email"

    if (!formData.rollId.trim()) errs.rollId = "Roll/ID is required"

    const phoneRegex = /^[0-9]{10,15}$/
    if (!formData.phone.trim()) errs.phone = "Phone number is required"
    else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) errs.phone = "Invalid phone number"

    const aadhaarRegex = /^[0-9]{12}$/
    if (!formData.aadhaar.trim()) errs.aadhaar = "Aadhaar is required"
    else if (!aadhaarRegex.test(formData.aadhaar.replace(/\D/g, ""))) errs.aadhaar = "Aadhaar must be 12 digits"

    if (!formData.bloodType) errs.bloodType = "Select blood type"
    if (!formData.roleType) errs.roleType = "Select role type"
    if (!formData.branch) errs.branch = "Select branch"
    if (!formData.dob) errs.dob = "Select date of birth"
    if (!formData.location) errs.location = "Select location"
    if (!formData.terms) errs.terms = "You must accept terms"

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    try {
      const response = await fetch("/api/donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (!response.ok) throw new Error(result.error || "Failed to submit form")

      setSubmitted(true)
      setFormData({
        fullName: "",
        guardianName: "",
        email: "",
        rollId: "",
        phone: "",
        aadhaar: "",
        bloodType: "",
        roleType: "",
        branch: "",
        dob: "",
        location: "",
        message: "",
        terms: false,
      })

      setTimeout(() => setSubmitted(false), 4000)
    } catch (error: any) {
      console.error("Error submitting form:", error.message)
      alert("Failed to submit form: " + error.message)
    } finally {
      setLoading(false)
    }
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
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Your Full Name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Father's / Guardian's Name</Label>
                  <Input
                    value={formData.guardianName}
                    onChange={(e) => handleChange("guardianName", e.target.value)}
                    placeholder="Guardian Name"
                  />
                  {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your_email@skit.ac.in"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Roll No./Student ID/Employee ID</Label>
                  <Input
                    value={formData.rollId}
                    onChange={(e) => handleChange("rollId", e.target.value)}
                    placeholder="Your ID here"
                  />
                  {errors.rollId && <p className="text-red-500 text-sm">{errors.rollId}</p>}
                </motion.div>
              </div>

              {/* Phone, Aadhaar, Blood, Role, Branch */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2">
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 0000000000"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Aadhaar Number</Label>
                  <Input
                    type="tel"
                    value={formData.aadhaar}
                    onChange={(e) => handleChange("aadhaar", e.target.value)}
                    placeholder="1111 1111 1111"
                  />
                  {errors.aadhaar && <p className="text-red-500 text-sm">{errors.aadhaar}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Blood Type</Label>
                  <Select value={formData.bloodType} onValueChange={(v) => handleChange("bloodType", v)}>
                    <SelectTrigger>
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
                      <SelectItem value="unknown">I don't know</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.bloodType && <p className="text-red-500 text-sm">{errors.bloodType}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Role Type</Label>
                  <Select value={formData.roleType} onValueChange={(v) => handleChange("roleType", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Role Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="staffmanager">Staff Manager</SelectItem>
                      <SelectItem value="outsideskit">Outside SKIT</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.roleType && <p className="text-red-500 text-sm">{errors.roleType}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Branch</Label>
                  <Select value={formData.branch} onValueChange={(v) => handleChange("branch", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">COMPUTER SCIENCE</SelectItem>
                      <SelectItem value="ds">DATA SCIENCE</SelectItem>
                      <SelectItem value="it">INFORMATION TECHNOLOGY</SelectItem>
                      <SelectItem value="iot">INTERNET OF THINGS</SelectItem>
                      <SelectItem value="civil">CIVIL ENGINEERING</SelectItem>
                      <SelectItem value="mech">MECHANICAL ENGINEERING</SelectItem>
                      <SelectItem value="pharma">PHARMACY</SelectItem>
                      <SelectItem value="ai">ARTIFICIAL INTELLIGENCE</SelectItem>
                      <SelectItem value="ece">ELECTRONICS & COMMUNICATION</SelectItem>
                      <SelectItem value="ee">ELECTRICAL</SelectItem>
                      <SelectItem value="mba">MBA</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.branch && <p className="text-red-500 text-sm">{errors.branch}</p>}
                </motion.div>
              </div>

              {/* DOB and Location */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div className="space-y-2">
                  <Label>D.O.B</Label>
                  <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                  />
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </motion.div>

                <motion.div className="space-y-2">
                  <Label>Preferred Location</Label>
                  <Select value={formData.location} onValueChange={(v) => handleChange("location", v)}>
                    <SelectTrigger>
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
                  {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                </motion.div>
              </div>

              {/* Additional Message */}
              <motion.div className="space-y-2">
                <Label>Additional Information (Optional)</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Any medical conditions, allergies, or special requirements we should know about..."
                  rows={4}
                  className="resize-none"
                />
              </motion.div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => handleChange("terms", e.target.checked)}
                  id="terms"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                  I confirm that I am in good health, meet the eligibility criteria, and agree to the terms and conditions of blood donation
                </Label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

              {/* Submit Button */}
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
