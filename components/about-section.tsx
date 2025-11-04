import { Card } from "@/components/ui/card"
import { Target, Users, Globe, Award } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every sector we operate.",
    },
    {
      icon: Users,
      title: "People First",
      description: "Investing in our team and communities to create lasting positive impact.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Building a better future through responsible and sustainable practices.",
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing new technologies and methods to stay ahead of the curve.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Rexrica is a leading diversified conglomerate with operations spanning nine key industries. With over 25
            years of experience, we've built a reputation for excellence, innovation, and sustainable growth across all
            our business sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
