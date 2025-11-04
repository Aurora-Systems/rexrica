import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Construction, Wheat, Coins, Shield, Truck, Building2, Factory, Ship } from "lucide-react"
import Link from "next/link"

export function SectorsSection() {
  const sectors = [
    {
      id: "mining",
      icon: Mountain,
      title: "Mining",
      description:
        "Comprehensive mining operations including exploration, extraction, and resource management with industry-leading safety standards and sustainable practices.",
      image: "/mining-operations-equipment.jpg",
      href: "/sectors/mining",
    },
    {
      id: "construction",
      icon: Construction,
      title: "Road Construction",
      description:
        "Infrastructure development and road building expertise delivering quality projects with modern equipment and proven construction methodologies.",
      image: "/road-construction-infrastructure.jpg",
      href: "/sectors/road-construction",
    },
    {
      id: "agriculture",
      icon: Wheat,
      title: "Agricultural Production",
      description:
        "Modern agricultural operations utilizing advanced farming technologies and sustainable practices to ensure food security and product quality.",
      image: "/modern-agriculture-farming.jpg",
      href: "/sectors/agricultural-production",
    },
    {
      id: "microfinance",
      icon: Coins,
      title: "Microfinance",
      description:
        "Financial inclusion services supporting small businesses and entrepreneurs with accessible lending products and community-focused solutions.",
      image: "/microfinance-community-banking.jpg",
      href: "/sectors/microfinance",
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Insurance",
      description:
        "Comprehensive insurance products and risk management solutions for individuals and businesses, providing reliable protection and peace of mind.",
      image: "/insurance-protection-services.jpg",
      href: "/sectors/insurance",
    },
    {
      id: "logistics",
      icon: Truck,
      title: "Logistics",
      description:
        "Efficient transportation and supply chain management services with a modern fleet and extensive distribution network.",
      image: "/logistics-transportation-fleet.jpg",
      href: "/sectors/logistics",
    },
    {
      id: "property",
      icon: Building2,
      title: "Property Development",
      description:
        "Real estate development and property management services delivering high-quality residential and commercial projects.",
      image: "/property-development-real-estate.jpg",
      href: "/sectors/property-development",
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing facilities with rigorous quality control processes producing diverse products for various markets.",
      image: "/manufacturing-facility-production.jpg",
      href: "/sectors/manufacturing",
    },
    {
      id: "trade",
      icon: Ship,
      title: "Import & Export",
      description:
        "International trade operations connecting global markets with strategic partnerships and expertise in moving goods across borders.",
      image: "/international-trade-shipping.png",
      href: "/sectors/import-export",
    },
  ]

  return (
    <section id="sectors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Business Sectors</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Explore our diverse portfolio of industries where we deliver excellence and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <Card key={sector.id} id={sector.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={sector.image || "/placeholder.svg"}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <sector.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{sector.description}</CardDescription>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={sector.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
