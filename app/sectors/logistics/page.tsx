import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, MapPin, Clock, Shield, Network } from "lucide-react"
import Link from "next/link"

export default function LogisticsPage() {
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
                <Truck className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Logistics & Transportation</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Efficient transportation and supply chain management services with a modern fleet and extensive
                distribution network connecting businesses to markets.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Service</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Moving Your Business Forward</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Our logistics division provides comprehensive transportation and supply chain solutions that keep your
                  business moving. With a modern fleet of vehicles, strategic distribution centers, and advanced
                  tracking systems, we ensure your goods reach their destination safely, on time, and in perfect
                  condition.
                </p>
                <p>
                  From local deliveries to long-haul transportation, warehousing to last-mile delivery, we offer
                  end-to-end logistics services tailored to your specific needs. Our experienced team and proven
                  processes make us a reliable partner for businesses of all sizes across diverse industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Logistics Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive transportation solutions for seamless supply chain management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="pt-6">
                  <Truck className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Fleet Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Modern, well-maintained fleet of vehicles ranging from light delivery vans to heavy-duty trucks for
                    all transportation needs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Package className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Warehousing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Secure storage facilities with inventory management systems, climate control, and efficient loading
                    and unloading operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Route Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Advanced routing technology ensuring the most efficient delivery paths, reducing costs and delivery
                    times for maximum efficiency.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Real-Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    GPS tracking and monitoring systems providing real-time visibility of shipments and delivery status
                    updates throughout transit.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Cargo Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Comprehensive security measures including trained personnel, secure facilities, and insurance
                    coverage protecting your valuable cargo.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Network className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Distribution Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Extensive network of distribution centers and partnerships enabling efficient nationwide and
                    regional delivery coverage.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline Your Supply Chain</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Ready to optimize your logistics operations? Contact our team to discuss your transportation and
                warehousing needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
