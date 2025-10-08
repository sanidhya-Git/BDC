import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Ready to Make a <span className="text-primary">Difference?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Your donation can save lives today. Join our community of heroes and start your journey as a blood donor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" asChild>
              <Link href="/register">
                Become a Donor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <Link href="/centers">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
