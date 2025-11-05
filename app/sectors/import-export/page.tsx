import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Globe, FileText, TrendingUp, Shield, Network } from "lucide-react"
import Link from "next/link"

export default function ImportExportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6">
                <Ship className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Import & Export</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                International trade operations connecting global markets with strategic partnerships and expertise in
                moving goods across borders efficiently and compliantly.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Trading</Link>
                </Button>
                {/* <Button size="lg" variant="outline" asChild>
                  <Link href="/#sectors">View All Sectors</Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Connecting Global Markets</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Rexrica's import and export division facilitates international trade by connecting businesses with
                  global markets. We leverage our extensive network of partners, deep understanding of international
                  trade regulations, and logistics expertise to help businesses expand their reach and access products
                  from around the world.
                </p>
                <p>
                  Whether you're looking to export your products to new markets or source quality goods from
                  international suppliers, we provide comprehensive trade services including documentation, customs
                  clearance, freight forwarding, and compliance management. Our team navigates the complexities of
                  international trade so you can focus on growing your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Trade Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive international trade solutions for seamless global commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="pt-6">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Global Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Extensive network of international partners, suppliers, and distributors across multiple continents
                    and markets worldwide.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Documentation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Complete handling of trade documentation including invoices, certificates of origin, bills of
                    lading, and customs declarations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Compliance Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Expert guidance on international trade regulations, tariffs, and compliance requirements ensuring
                    smooth customs clearance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Ship className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Freight Forwarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Coordination of international shipping via sea, air, and land with competitive rates and reliable
                    delivery schedules.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Market Intelligence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Market research and insights helping businesses identify opportunities, understand demand, and make
                    informed trade decisions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Network className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Supply Chain Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Integrated supply chain management connecting sourcing, logistics, and distribution for efficient
                    international trade operations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expand Your Global Reach</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Ready to explore international markets? Contact our trade team to discuss import and export
                opportunities for your business.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Trade Division</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
