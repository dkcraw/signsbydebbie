import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-sign-shop-with-neon-signs-and-custom-.jpg"
          alt="Custom signage workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase">Custom Signage Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Make Your Business Stand Out with Custom Signs
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed max-w-2xl">
            From eye-catching storefront signage to professional vehicle wraps, we bring your vision to life with
            quality craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9368674399">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-8">
                <Phone className="w-5 h-5" />
                Call For Free Quote
              </Button>
            </a>
            <a href="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background/10 gap-2 text-lg px-8 bg-transparent"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
