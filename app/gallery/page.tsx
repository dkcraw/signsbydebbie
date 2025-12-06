import { Phone, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const galleryItems = [
  {
    title: "Custom Business Signage",
    description: "Eye-catching storefront sign for local restaurant",
    image: "/custom-business-storefront-sign-restaurant.jpg",
  },
  {
    title: "Vehicle Wrap",
    description: "Full vehicle wrap for service company fleet",
    image: "/professional-vehicle-wrap-truck-signage.jpg",
  },
  {
    title: "Monument Sign",
    description: "Elegant monument sign for office complex",
    image: "/monument-sign-office-building-entrance.jpg",
  },
  {
    title: "Window Graphics",
    description: "Custom window lettering and graphics",
    image: "/window-graphics-lettering-storefront.jpg",
  },
  {
    title: "LED Channel Letters",
    description: "Illuminated channel letter sign for retail store",
    image: "/led-channel-letter-sign-illuminated-retail.jpg",
  },
  {
    title: "Real Estate Signs",
    description: "Durable real estate signage for property listings",
    image: "/real-estate-yard-sign-professional.jpg",
  },
  {
    title: "Banner & Flags",
    description: "Custom banners for grand opening event",
    image: "/custom-vinyl-banner-grand-opening-event.jpg",
  },
  {
    title: "Directional Signage",
    description: "Wayfinding signs for corporate campus",
    image: "/directional-wayfinding-sign-corporate.jpg",
  },
  {
    title: "Trailer Wrap",
    description: "Full trailer graphics for mobile advertising",
    image: "/trailer-wrap-graphics-mobile-advertising.jpg",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground text-background py-6">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-background hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <a href="tel:9368674399">
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <Phone className="w-4 h-4" />
              (936) 867-4399
            </Button>
          </a>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of custom signage projects. Each sign is crafted with care and attention to
            detail.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-background/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free quote on your custom signage project.
          </p>
          <a href="tel:9368674399">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-8">
              <Phone className="w-5 h-5" />
              Call (936) 867-4399
            </Button>
          </a>
        </div>
      </section>
    </main>
  )
}
