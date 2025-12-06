import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-bold mb-2">
              Signs by <span className="text-accent">Debbie</span>
            </p>
            <p className="text-background/70">Quality Custom Signage Since 1996  </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <a href="tel:9368674399" className="text-xl font-semibold hover:text-accent transition-colors">
              (936) 867-4399
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Signs by Debbie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
