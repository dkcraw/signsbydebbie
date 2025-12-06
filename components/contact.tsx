import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                <a href="tel:9368674399" className="text-primary hover:underline font-medium">
                  (936) 867-4399
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Serving East Texas</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 8am - 5pm</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Call us today for a free estimate. We'll discuss your project, provide design recommendations, and deliver
              signage that makes an impact.
            </p>
            <a href="tel:9368674399">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-10">
                <Phone className="w-5 h-5" />
                (936) 867-4399
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
