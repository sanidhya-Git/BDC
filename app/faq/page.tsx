"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, HelpCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "How long does the entire donation process take?",
          answer:
            "The entire process typically takes about 45-60 minutes, including registration, health screening, the actual donation (8-10 minutes), and recovery time. First-time donors may need a bit more time for the initial paperwork and orientation.",
        },
        {
          question: "How often can I donate blood?",
          answer:
            "You can donate whole blood every 56 days (8 weeks). For platelet donations, you can donate every 7 days, up to 24 times per year. For plasma donations, you can donate every 28 days. Your body needs time to replenish the donated blood components.",
        },
        {
          question: "Is donating blood safe?",
          answer:
            "Yes, donating blood is very safe. We use sterile, single-use needles and equipment for every donation. There is no risk of contracting any disease from donating blood. All equipment is disposed of properly after each use.",
        },
        {
          question: "Will donating blood make me weak?",
          answer:
            "Most people feel fine after donating blood. Your body replaces the fluid volume within 24 hours and red blood cells within 4-6 weeks. Following our post-donation care instructions (rest, hydrate, eat well) helps ensure you feel great.",
        },
      ],
    },
    {
      category: "Eligibility & Health",
      icon: HelpCircle,
      questions: [
        {
          question: "What are the basic eligibility requirements?",
          answer:
            "You must be at least 18 years old (16-17 with parental consent), weigh at least 110 pounds, and be in good general health. You should not have donated blood in the last 56 days and must pass the health screening on the day of donation.",
        },
        {
          question: "Can I donate if I have a tattoo or piercing?",
          answer:
            "You can donate if your tattoo or piercing was done at a state-regulated facility using sterile needles and ink that is not reused. If done at an unregulated facility, you must wait 3 months before donating. This helps ensure blood safety.",
        },
        {
          question: "Can I donate if I'm taking medications?",
          answer:
            "Most medications do not prevent you from donating blood. However, some medications like blood thinners, antibiotics, or certain acne medications may require a waiting period. Always inform our staff about any medications you're taking during screening.",
        },
        {
          question: "What if I have low iron levels?",
          answer:
            "If your hemoglobin levels are too low on the day of donation, you'll be temporarily deferred. We recommend eating iron-rich foods (red meat, spinach, beans) and taking iron supplements if advised by your doctor. You can try again after your levels improve.",
        },
      ],
    },
    {
      category: "The Donation Process",
      icon: HelpCircle,
      questions: [
        {
          question: "Does donating blood hurt?",
          answer:
            "You may feel a slight pinch when the needle is inserted, similar to a routine blood test. Most donors report minimal discomfort. The actual donation process is painless, and our trained staff ensures you're comfortable throughout.",
        },
        {
          question: "What should I do before donating?",
          answer:
            "Get a good night's sleep, eat a healthy meal, drink plenty of water (at least 16 oz extra), avoid fatty foods, and wear comfortable clothing. Bring a valid photo ID and a list of any medications you're taking.",
        },
        {
          question: "What happens during the health screening?",
          answer:
            "We'll check your temperature, blood pressure, pulse, and hemoglobin levels. You'll answer confidential questions about your health history, travel, and lifestyle. This screening ensures both your safety and the safety of blood recipients.",
        },
        {
          question: "Can I exercise after donating?",
          answer:
            "Avoid strenuous exercise and heavy lifting for 24 hours after donation. Light activities like walking are fine. Your body needs time to replenish the donated blood, and intense exercise too soon could make you feel dizzy or fatigued.",
        },
      ],
    },
    {
      category: "After Donation",
      icon: HelpCircle,
      questions: [
        {
          question: "What should I do after donating?",
          answer:
            "Rest for 10-15 minutes, drink plenty of fluids, eat the provided snacks, keep your bandage on for 4 hours, and avoid strenuous activity for 24 hours. Drink extra water for the next 24-48 hours to help your body recover.",
        },
        {
          question: "When will I know where my blood was used?",
          answer:
            "Within 24-48 hours, you'll receive an email or notification letting you know which hospital received your blood and how it helped patients. You can also track this information in your donor dashboard.",
        },
        {
          question: "What if I feel dizzy or unwell after donating?",
          answer:
            "Sit or lie down immediately if you feel dizzy. Drink water and eat something. Most symptoms resolve quickly. If symptoms persist or you have concerns, contact us immediately at our 24/7 support line: 1-800-DONATE-1.",
        },
        {
          question: "How long until I can donate again?",
          answer:
            "For whole blood donations, you must wait 56 days (8 weeks) before your next donation. We'll send you a reminder when you're eligible again. You can also check your eligibility date in your donor dashboard.",
        },
      ],
    },
    {
      category: "Blood Types & Testing",
      icon: HelpCircle,
      questions: [
        {
          question: "Will I find out my blood type?",
          answer:
            "Yes! After your first donation, we'll test your blood type and send you a donor card with this information. You can also view your blood type in your online donor dashboard. This information is valuable for your personal health records.",
        },
        {
          question: "What blood type is most needed?",
          answer:
            "O negative is the universal donor type and is always in high demand for emergencies. However, all blood types are needed. We'll let you know if your specific blood type is in critical need in your area.",
        },
        {
          question: "Is my blood tested for diseases?",
          answer:
            "Yes, every donation is tested for infectious diseases including HIV, hepatitis B and C, syphilis, and other blood-borne pathogens. If any issues are detected, you'll be notified confidentially and your blood will not be used for transfusion.",
        },
        {
          question: "Can I donate if I don't know my blood type?",
          answer:
            "You don't need to know your blood type to donate. We'll determine your blood type during the testing process after your donation and provide you with this information.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-28 text-center">
          <div className="container px-4 mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about blood donation, eligibility, and the donation process.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto max-w-4xl px-4 space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center gap-3 justify-center mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-center">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg bg-card px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4 font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="w-full py-20 bg-muted/30 text-center">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our support team is here to help you 24/7
            </p>

            <div className="grid md:grid-cols-2 gap-8 justify-center">
              {/* Call Us */}
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 text-left flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Speak with our support team anytime
                    </p>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="font-medium">General: </span>
                        <a href="tel:1-800-DONATE-1" className="text-primary hover:underline">
                          1-800-DONATE-1
                        </a>
                      </div>
                      <div>
                        <span className="font-medium">Emergency: </span>
                        <a href="tel:1-800-URGENT-1" className="text-primary hover:underline">
                          1-800-URGENT-1
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Us */}
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6 text-left flex gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get a response within 24 hours
                    </p>
                    <a
                      href="mailto:info@lifeflow.org"
                      className="text-sm text-primary hover:underline font-medium"
                    >
                      info@lifeflow.org
                    </a>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">Contact Form</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Resources */}
        <section className="w-full py-20 text-center">
          <div className="container mx-auto max-w-3xl px-4 space-y-6">
            <h2 className="text-3xl font-bold text-balance">Downloadable Resources</h2>
            <p className="text-lg text-muted-foreground">
              Get detailed information guides to read at your convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/resources/donor-guide.pdf">Download Donor Guide</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources/eligibility-checklist.pdf">Eligibility Checklist</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resources/preparation-tips.pdf">Preparation Tips</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
