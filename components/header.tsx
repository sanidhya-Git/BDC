"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
            <Heart className="h-6 w-6 text-primary fill-primary" />
          </motion.div>
          <span className="text-balance group-hover:text-primary transition-colors">BDC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Link href="/donateform">Donate Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
                Gallery
              </Link>
              <div className="pt-2 border-t border-border">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/donateform">Donate Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
