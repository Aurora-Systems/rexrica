import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const sectors = [
    { name: "Mining", href: "#mining" },
    { name: "Road Construction", href: "#construction" },
    { name: "Agriculture", href: "#agriculture" },
    { name: "Microfinance", href: "#microfinance" },
    { name: "Insurance", href: "#insurance" },
    { name: "Logistics", href: "#logistics" },
    { name: "Property", href: "#property" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Import & Export", href: "#trade" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rexrica</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A diversified conglomerate delivering excellence across multiple industries with a commitment to
              innovation, sustainability, and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#sectors"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold mb-4">Our Sectors</h4>
            <ul className="space-y-2 text-sm">
              {sectors.slice(0, 5).map((sector) => (
                <li key={sector.name}>
                  <Link
                    href={sector.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Email: info@rexrica.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Rexrica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
