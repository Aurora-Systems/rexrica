import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction, Truck, HardHat, MapPin, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RoadConstructionPage() {
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
                <Construction className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Road Construction</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Building the infrastructure that connects communities with quality road construction services, modern
                equipment, and proven methodologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request a Quote</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Infrastructure Excellence</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Our road construction division delivers comprehensive infrastructure development services, from
                  initial planning and design to final execution. We specialize in building durable, high-quality roads
                  that stand the test of time and serve communities for decades.
                </p>
                <p>
                  With a fleet of modern equipment and a team of experienced engineers and construction professionals,
                  we handle projects of all scales—from rural access roads to major highway developments. Our commitment
                  to quality, safety, and timely delivery has made us a trusted partner in infrastructure development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Construction Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive road building solutions for every project need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Modern Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    State-of-the-art machinery and construction equipment ensuring efficient project execution and
                    superior quality results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <HardHat className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Skilled engineers, project managers, and construction workers with extensive experience in road
                    building and infrastructure.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Project Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Comprehensive site surveys, design services, and strategic planning to ensure optimal route
                    selection and construction methods.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Timely Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Proven track record of completing projects on schedule through efficient project management and
                    resource allocation.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Quality Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Adherence to international construction standards and rigorous quality control throughout every
                    phase of the project.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Construction className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Full-Service Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    End-to-end construction services including earthworks, paving, drainage systems, and road
                    maintenance programs.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Project</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Ready to build infrastructure that lasts? Contact our construction team to discuss your road building
                needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
