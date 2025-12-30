import { Store, Car, Flag, Lightbulb, PenTool, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Store,
    title: "Storefront Signs",
    description: "Eye-catching signs that attract customers and establish your brand presence.",
  },
  {
    icon: Car,
    title: "Vehicle Wraps",
    description: "Turn your vehicle into a mobile billboard with custom graphics and wraps.",
  },
  {
    icon: Flag,
    title: "Banners & Flags",
    description: "Durable indoor and outdoor banners for events, promotions, and more.",
  },
  {
    icon: PenTool,
    title: "Custom Graphics",
    description: "Unique designs tailored to your brand identity and business needs.",
  },
  {
    icon: Building,
    title: "Building Signs",
    description: "Professional exterior and interior signage for commercial properties.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase">What We Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Signage Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive signage solutions to help your business make a lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
