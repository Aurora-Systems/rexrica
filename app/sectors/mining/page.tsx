import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mountain, Shield, Leaf, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function MiningPage() {
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
                <Mountain className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Mining Operations</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Leading the industry with comprehensive mining operations, sustainable practices, and cutting-edge
                technology for resource extraction and management.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Mining Division</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Rexrica's mining division represents decades of expertise in mineral exploration, extraction, and
                  resource management. We operate with the highest safety standards and environmental responsibility,
                  ensuring sustainable practices that benefit both our stakeholders and the communities we serve.
                </p>
                <p>
                  Our comprehensive approach encompasses everything from geological surveys and exploration to
                  full-scale mining operations and resource processing. We leverage advanced technology and industry
                  best practices to maximize efficiency while minimizing environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mining Capabilities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive services backed by expertise and modern equipment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="pt-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Industry-leading safety protocols and training programs ensuring the wellbeing of our workforce and
                    surrounding communities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Leaf className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Sustainable Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Environmental stewardship through responsible mining techniques, land rehabilitation, and carbon
                    footprint reduction initiatives.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    State-of-the-art equipment and digital solutions for exploration, extraction, and processing to
                    maximize efficiency and output.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Highly skilled geologists, engineers, and technicians with extensive experience in mineral
                    exploration and extraction.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Rigorous quality control processes ensuring consistent output and compliance with international
                    standards and regulations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pt-6">
                  <Mountain className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Resource Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Strategic planning and efficient resource utilization to ensure long-term sustainability and
                    operational excellence.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Discover how our mining expertise can support your resource needs with sustainable and efficient
                solutions.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Our Mining Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
