import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Building, Hammer, Key, Users } from "lucide-react"
import Link from "next/link"

export default function PropertyDevelopmentPage() {
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
                <Building2 className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Property Development</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Real estate development and property management services delivering high-quality residential and
                commercial projects that enhance communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">View Properties</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Communities, Creating Value</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Rexrica's property development division specializes in creating exceptional residential and commercial
                  spaces that meet the evolving needs of modern living and business. From initial site selection and
                  planning through construction and final delivery, we manage every aspect of the development process
                  with attention to quality, sustainability, and value creation.
                </p>
                <p>
                  Our portfolio includes residential communities, commercial complexes, mixed-use developments, and
                  property management services. We combine architectural excellence with practical functionality,
                  creating spaces that enhance quality of life while delivering strong returns for investors and
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive real estate solutions from concept to completion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="pt-6">
                  <Home className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Residential Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Quality housing projects from single-family homes to multi-unit complexes designed for modern living
                    with community amenities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Commercial Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Office buildings, retail spaces, and commercial complexes strategically located and designed to
                    support business success.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Hammer className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    End-to-end development management including planning, permitting, construction oversight, and
                    quality assurance throughout the project lifecycle.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Key className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Property Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Professional management services for residential and commercial properties including maintenance,
                    tenant relations, and financial administration.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Community Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Thoughtful master planning creating integrated communities with parks, amenities, and infrastructure
                    that enhance quality of life.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Sustainable Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Environmentally conscious development incorporating energy efficiency, green building practices, and
                    sustainable materials.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in Quality Real Estate</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Explore our current and upcoming property developments or discuss partnership opportunities with our
                development team.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Property Division</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
