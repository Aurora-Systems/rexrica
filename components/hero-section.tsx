import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute inset-0 bg-[url('/abstract-corporate-pattern.png')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Building Tomorrow's
            <span className="block text-primary mt-2">Success Today</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A diversified conglomerate delivering excellence across mining, construction, agriculture, finance, and
            beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Explore Our Sectors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground mt-1">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Clients Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
