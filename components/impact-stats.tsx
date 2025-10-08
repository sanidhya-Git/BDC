import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Building2, Globe } from "lucide-react"

export function ImpactStats() {
  const stats = [
    {
      icon: Heart,
      value: "150K+",
      label: "Lives Saved",
      description: "Through blood donations since 2020",
    },
    {
      icon: Users,
      value: "45K+",
      label: "Active Donors",
      description: "Registered community members",
    },
    {
      icon: Building2,
      value: "200+",
      label: "Partner Hospitals",
      description: "Receiving our blood supply",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Cities Covered",
      description: "Across the country",
    },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Mission & Impact</h2>
          <p className="text-lg text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
            Building a sustainable blood supply network that saves lives every day
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20 mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70 text-pretty">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
