import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Users, Globe, Award, TrendingUp, Shield, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality in every sector we operate, setting industry standards and exceeding expectations.",
    },
    {
      icon: Users,
      title: "People First",
      description:
        "Our success is built on the dedication of our team. We invest in our people and the communities we serve to create lasting positive impact.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We believe in building a better future through responsible and sustainable business practices that benefit both people and planet.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace new technologies and methods to stay ahead of the curve, continuously improving our services and operations.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, building trust through transparency and accountability in all our dealings.",
    },
    {
      icon: Lightbulb,
      title: "Adaptability",
      description:
        "In a rapidly changing world, we remain flexible and responsive, adapting our strategies to meet evolving market demands.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "We pursue sustainable growth that creates value for our stakeholders while contributing to economic development.",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "We are committed to making a positive difference in the communities where we operate through social responsibility initiatives.",
    },
  ]

  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description: "Rexrica was established with a vision to create a diversified business empire.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Expanded operations into mining and agricultural production sectors.",
    },
    {
      year: "2010",
      title: "Diversification",
      description: "Added financial services including microfinance and insurance to our portfolio.",
    },
    {
      year: "2015",
      title: "Infrastructure",
      description: "Launched road construction and logistics divisions to support national development.",
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Invested in manufacturing and modernized operations across all sectors.",
    },
    {
      year: "2025",
      title: "Global Reach",
      description: "Established import-export operations and expanded our international presence.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Header />
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About Rexrica</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Building a diversified future through excellence, innovation, and sustainable growth across nine key
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                 Rexrica has grown from a single-sector operation into one of the region's
                  most respected diversified conglomerates. Our journey has been marked by strategic expansion,
                  unwavering commitment to quality, and a deep understanding of the industries we serve.
                </p>
                <p>
                  Today, we operate across nine distinct sectors: Mining, Road Construction, Agricultural Production,
                  Microfinance, Insurance, Logistics, Property Development and Management, Manufacturing, and Import &
                  Export. Each division is led by industry experts who bring decades of combined experience and a
                  passion for excellence.
                </p>
                <p>
                  Our success is built on strong relationships with our clients, partners, and communities. We believe
                  that sustainable business growth goes hand-in-hand with social responsibility, and we're committed to
                  making a positive impact wherever we operate.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/huge-logo.png" alt="Rexrica headquarters" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value across diverse industries through innovation, operational excellence, and
                sustainable practices that benefit our stakeholders and communities.
              </p>
            </Card>
            <Card className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading diversified conglomerate recognized for transforming industries, empowering
                communities, and setting new standards of excellence in everything we do.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              These principles guide every decision we make and every action we take across all our business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Key milestones that have shaped Rexrica into the diversified conglomerate we are today.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-border relative">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  <Card className="flex-1 p-6">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Discover how Rexrica's diverse expertise and commitment to excellence can help drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <Link href="/#sectors">Explore Our Sectors</Link>
              </Button> */}
            </div>
          </Card>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
