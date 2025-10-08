import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ClipboardCheck,
  Heart,
  Coffee,
  Award,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export function Donatedetails() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Registration & Health Screening",
      description:
        "When you arrive, you'll register and complete a confidential health history questionnaire. Our staff will check your temperature, blood pressure, pulse, and hemoglobin levels.",
      duration: "10-15 minutes",
      tips: ["Bring a valid ID", "Know your medical history", "List any medications you're taking"],
    },
    {
      icon: Heart,
      title: "Blood Donation",
      description:
        "You'll be seated comfortably while a trained phlebotomist collects your donation. The actual blood draw takes only 8-10 minutes. You can relax, read, or watch videos during this time.",
      duration: "8-10 minutes",
      tips: [
        "Relax and breathe normally",
        "Squeeze a stress ball if provided",
        "Let staff know if you feel uncomfortable",
      ],
    },
    {
      icon: Coffee,
      title: "Rest & Refreshments",
      description:
        "After donating, you'll rest for 10-15 minutes while enjoying snacks and drinks. This helps your body recover and ensures you feel well before leaving.",
      duration: "10-15 minutes",
      tips: ["Drink plenty of fluids", "Eat the provided snacks", "Rest until you feel ready to leave"],
    },
    {
      icon: Award,
      title: "Track Your Impact",
      description:
        "Within 24-48 hours, you'll receive updates about where your blood was used. Track your donations, earn badges, and see the lives you've helped save through your dashboard.",
      duration: "Ongoing",
      tips: ["Check your email for updates", "Log in to view your impact", "Share your achievement on social media"],
    },
  ]

  const eligibilityCriteria = {
    eligible: [
      "Age 18-65 years old (16-17 with parental consent)",
      "Weight at least 110 pounds (50 kg)",
      "In good general health",
      "Not donated blood in the last 56 days",
      "Hemoglobin levels within normal range",
      "Blood pressure within acceptable limits",
    ],
    ineligible: [
      "Currently pregnant or nursing",
      "Recent tattoo or piercing (within 3 months)",
      "Recent travel to malaria-endemic areas",
      "History of certain medical conditions",
      "Taking specific medications",
      "Recent surgery or dental work",
    ],
    temporary: [
      "Cold or flu symptoms",
      "Recent vaccination (timing varies)",
      "Low iron levels",
      "Recent dental procedures",
      "Antibiotics treatment",
      "Recent blood donation",
    ],
  }

  const beforeDonation = [
    "Get a good night's sleep (7-8 hours)",
    "Eat a healthy meal rich in iron",
    "Drink plenty of water (16 oz extra)",
    "Avoid fatty foods before donation",
    "Wear comfortable clothing with sleeves that roll up easily",
    "Bring a valid photo ID",
  ]

  const afterDonation = [
    "Keep the bandage on for at least 4 hours",
    "Drink extra fluids for the next 24-48 hours",
    "Avoid strenuous exercise for 24 hours",
    "Eat iron-rich foods to replenish",
    "If you feel dizzy, sit or lie down immediately",
    "Contact us if you experience any concerns",
  ]

  return (
    <div className="py-10">
      {/* Donation Process */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            The Donation <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground">
            A step-by-step walkthrough of what happens during your donation visit
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-md transition">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-semibold">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                      <span className="text-sm text-muted-foreground">{step.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h4 className="font-semibold mb-2 text-sm">Helpful Tips:</h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-8 bg-muted/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Eligibility <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-muted-foreground">Check if you're eligible to donate blood today</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <CheckCircle2 className="h-5 w-5" />
                You Can Donate If
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityCriteria.eligible.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <XCircle className="h-5 w-5" />
                You Cannot Donate If
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityCriteria.ineligible.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <AlertCircle className="h-5 w-5" />
                Temporary Deferrals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityCriteria.temporary.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Before Your Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {beforeDonation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">After Your Donation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {afterDonation.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-bold text-accent">{index + 1}</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
