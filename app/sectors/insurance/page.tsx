import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Home, Car, Heart, Briefcase, Users } from "lucide-react"
import Link from "next/link"

export default function InsurancePage() {
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
                <Shield className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Insurance Solutions</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Comprehensive insurance products and risk management solutions providing reliable protection and peace
                of mind for individuals and businesses.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#sectors">View All Sectors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protection You Can Trust</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Rexrica's insurance division offers a comprehensive range of insurance products designed to protect
                  what matters most to you. Whether you're an individual seeking personal coverage or a business looking
                  for commercial insurance solutions, we provide reliable protection backed by financial strength and
                  exceptional customer service.
                </p>
                <p>
                  Our experienced team works closely with clients to understand their unique needs and recommend
                  appropriate coverage options. We pride ourselves on transparent policies, fair claims processing, and
                  ongoing support to ensure you have the protection you need when you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Insurance Products</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive coverage options for every protection need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Property Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Comprehensive coverage for homes, buildings, and property against damage, theft, and natural
                    disasters with flexible policy options.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Car className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Auto Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Vehicle insurance coverage including liability, collision, and comprehensive protection with
                    competitive rates and quick claims processing.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Health Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Medical coverage plans for individuals and families providing access to quality healthcare with
                    extensive provider networks.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Business Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Commercial insurance solutions including liability, property, and business interruption coverage
                    tailored to your industry needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Life Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Life insurance policies providing financial security for your loved ones with term and whole life
                    coverage options available.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Professional risk assessment and management services helping businesses identify and mitigate
                    potential risks effectively.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect What Matters</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Get the insurance coverage you need with personalized service and competitive rates. Contact us for a
                free consultation.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
