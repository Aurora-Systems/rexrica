import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Factory, Cog, CheckCircle, Package, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

export default function ManufacturingPage() {
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
                <Factory className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Manufacturing Excellence</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                State-of-the-art manufacturing facilities with rigorous quality control processes producing diverse
                products for various markets with precision and efficiency.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Partner With Us</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Precision Manufacturing at Scale</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Our manufacturing division operates modern production facilities equipped with advanced machinery and
                  technology to deliver high-quality products across diverse industries. We combine traditional
                  manufacturing expertise with innovative processes to ensure efficiency, consistency, and excellence in
                  every product we produce.
                </p>
                <p>
                  From raw material sourcing to final product delivery, we maintain strict quality control standards at
                  every stage of production. Our commitment to continuous improvement, lean manufacturing principles,
                  and investment in technology enables us to meet the evolving demands of global markets while
                  maintaining competitive pricing and reliable delivery schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Manufacturing Capabilities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Advanced production facilities delivering quality products at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Cog className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Advanced Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Modern machinery and automation systems enabling efficient, high-volume production with precision
                    and consistency across all product lines.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Comprehensive quality assurance processes with testing at every production stage ensuring products
                    meet or exceed industry standards.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Diverse Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Wide range of manufactured goods serving multiple industries including consumer products, industrial
                    components, and specialized equipment.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Scalable Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Flexible manufacturing capacity allowing us to scale production up or down based on market demand
                    and customer requirements.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Safety Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Strict workplace safety protocols and environmental compliance ensuring safe operations and
                    responsible manufacturing practices.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Factory className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Custom Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Tailored manufacturing services including custom product development, private labeling, and
                    specialized production runs.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Manufacturing Partnership</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Looking for a reliable manufacturing partner? Contact us to discuss your production needs and explore
                how we can support your business.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
