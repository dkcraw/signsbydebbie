const galleryImages = [
  {
    src: "/professional-business-storefront-sign-with-modern-.jpg",
    alt: "Custom storefront sign",
  },
  {
    src: "/colorful-vehicle-wrap-on-commercial-truck.jpg",
    alt: "Vehicle wrap design",
  },
  {
  },
  {
    src: "/large-outdoor-banner-for-business-grand-opening.jpg",
    alt: "Promotional banner",
  },
  {
    src: "/elegant-interior-office-lobby-sign-with-company-lo.jpg",
    alt: "Interior lobby sign",
  },
  {
    src: "/real-estate-yard-sign-with-professional-design.jpg",
    alt: "Real estate signage",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-3 tracking-wide uppercase">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at some of our recent work. Each project is crafted with care and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                <p className="text-background p-4 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
