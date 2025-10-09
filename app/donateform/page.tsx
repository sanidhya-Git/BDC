"use client"

import { DonationForm } from "@/components/donation-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DonatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <DonationForm />
      </main>
      <Footer />
    </>
  )
}
