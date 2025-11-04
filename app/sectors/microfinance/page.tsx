import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Users, TrendingUp, Shield, Heart, Briefcase } from "lucide-react"
import Link from "next/link"

export default function MicrofinancePage() {
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
                <Coins className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Microfinance Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Empowering communities through accessible financial services, supporting small businesses and
                entrepreneurs with tailored lending solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Apply for Financing</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Inclusion for All</h2>
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
                <p>
                  Our microfinance division is dedicated to providing accessible financial services to underserved
                  communities and small business owners. We believe that everyone deserves the opportunity to build a
                  better future through access to fair and transparent financial products.
                </p>
                <p>
                  With flexible loan products, competitive rates, and personalized support, we help entrepreneurs start
                  and grow their businesses, families invest in education and healthcare, and communities build economic
                  resilience. Our community-focused approach ensures that financial services reach those who need them
                  most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Microfinance Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive financial services designed for community empowerment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Business Loans</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Flexible financing options for small businesses and entrepreneurs to start, expand, or improve their
                    operations with competitive rates.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Group Lending</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Community-based lending programs that leverage social capital and peer support for successful loan
                    repayment and business growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Financial Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Training programs and workshops on financial literacy, business management, and entrepreneurship to
                    ensure client success.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Transparent Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Clear and fair lending terms with no hidden fees, ensuring clients fully understand their financial
                    commitments and obligations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Community Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Dedicated to serving local communities with personalized service and support that understands unique
                    cultural and economic contexts.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Coins className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Savings Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accessible savings accounts and programs helping clients build financial security and plan for
                    future investments and emergencies.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Financial Journey</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
                Ready to access the financial services you need to grow? Contact our microfinance team to learn about
                our lending products.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Apply Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
