"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sectors = [
    { name: "Mining", href: "/sectors/mining" },
    { name: "Road Construction", href: "/sectors/road-construction" },
    { name: "Agricultural Production", href: "/sectors/agricultural-production" },
    { name: "Microfinance", href: "/sectors/microfinance" },
    { name: "Insurance", href: "/sectors/insurance" },
    { name: "Logistics", href: "/sectors/logistics" },
    { name: "Property Development", href: "/sectors/property-development" },
    { name: "Manufacturing", href: "/sectors/manufacturing" },
    { name: "Import & Export", href: "/sectors/import-export" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">
            <Image src="/logo.png" alt="Rexrica" width={200} height={100} />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Our Sectors
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {sectors.map((sector) => (
                <DropdownMenuItem key={sector.href} asChild>
                  <Link href={sector.href} className="cursor-pointer">
                    {sector.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/#about"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <div className="text-sm font-medium text-foreground py-2">Our Sectors</div>
              {sectors.map((sector) => (
                <Link
                  key={sector.href}
                  href={sector.href}
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {sector.name}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
