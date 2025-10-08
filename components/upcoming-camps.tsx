"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface Camp {
  id: number
  name: string
  location: string
  date: Date
  time: string
  capacity: number
  registered: number
}

export function UpcomingCamps() {
  const [camps] = useState<Camp[]>([
    {
      id: 1,
      name: "Community Blood Drive",
      location: "Central Community Center",
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      time: "9:00 AM - 5:00 PM",
      capacity: 100,
      registered: 67,
    },
    {
      id: 2,
      name: "University Health Fair",
      location: "State University Campus",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      time: "10:00 AM - 4:00 PM",
      capacity: 150,
      registered: 89,
    },
    {
      id: 3,
      name: "Corporate Wellness Day",
      location: "Tech Park Business District",
      date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      time: "8:00 AM - 2:00 PM",
      capacity: 80,
      registered: 45,
    },
  ])

  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    const updateCountdowns = () => {
      const newTimeLeft: { [key: number]: string } = {}
      camps.forEach((camp) => {
        const now = new Date().getTime()
        const distance = camp.date.getTime() - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        newTimeLeft[camp.id] = `${days}d ${hours}h`
      })
      setTimeLeft(newTimeLeft)
    }

    updateCountdowns()
    const interval = setInterval(updateCountdowns, 60000)
    return () => clearInterval(interval)
  }, [camps])

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Upcoming <span className="text-primary">Donation Camps</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join us at one of our upcoming blood donation events near you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {camps.map((camp) => (
            <Card key={camp.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-balance">{camp.name}</CardTitle>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {timeLeft[camp.id]}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {camp.date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{camp.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {camp.registered} / {camp.capacity} registered
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${(camp.registered / camp.capacity) * 100}%` }}
                    />
                  </div>
                  <Button className="w-full">Register Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
