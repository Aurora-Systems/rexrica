import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wheat, Sprout, Droplets, Sun, Tractor, Package } from "lucide-react"
import Link from "next/link"

export default function AgriculturalProductionPage() {
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
                <Wheat className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Agricultural Production</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Modern farming operations utilizing advanced agricultural technologies and sustainable practices to
                ensure food security and exceptional product quality.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Partner With Us</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Farming Excellence</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Rexrica's agricultural division combines traditional farming wisdom with cutting-edge technology to
                  produce high-quality crops and agricultural products. We are committed to sustainable farming
                  practices that protect the environment while maximizing productivity and ensuring food security.
                </p>
                <p>
                  Our operations span crop cultivation, livestock management, and agricultural processing. We employ
                  precision agriculture techniques, modern irrigation systems, and sustainable soil management practices
                  to optimize yields while preserving natural resources for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Agricultural Capabilities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive farming solutions backed by technology and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="pt-6">
                  <Sprout className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Environmentally responsible farming methods including crop rotation, organic fertilization, and
                    integrated pest management systems.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Droplets className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Smart Irrigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Advanced irrigation systems with precision water management to optimize crop growth while conserving
                    water resources.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Sun className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Climate Adaptation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Climate-smart agriculture techniques and crop varieties selected for resilience and optimal
                    performance in local conditions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Tractor className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Modern Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    State-of-the-art farming machinery and equipment for efficient planting, cultivation, and harvesting
                    operations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Package className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Quality Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Post-harvest processing facilities ensuring product quality, proper storage, and efficient
                    distribution to markets.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Wheat className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Diverse Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Wide range of agricultural products including grains, vegetables, fruits, and livestock to meet
                    diverse market demands.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow With Us</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Interested in our agricultural products or partnership opportunities? Connect with our farming team
                today.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Agriculture Division</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
