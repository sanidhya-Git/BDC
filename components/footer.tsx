import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="h-6 w-6 text-primary fill-primary" />
              <span>BDC</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Connecting donors with those in need. Together, we save lives through the gift of blood donation.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:sanidhya.web@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Report Bug
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@lifeflow.org</li>
              <li>Phone: 1-800-DONATE-1</li>
              <li>Emergency: 1-800-URGENT-1</li>
              <li>Hours: 24/7 Support</li>
            </ul>
          </div>
        </div>


        <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BDC — All rights reserved. Saving lives, one donation at a time.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Made with{" "}
            <Heart className="inline h-3 w-3 text-red-500 fill-red-500 mx-1 animate-pulse" /> by{" "}
            <span className="font-semibold text-foreground">Sanidhya Mehra</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
