import { CheckCircle } from "lucide-react"

const highlights = [
  "Over 40 years of experience",
  "Quality materials & craftsmanship",
  "Personalized customer service",
  "Competitive pricing",
  "Fast turnaround times",
  "Free design consultations",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/friendly-woman-business-owner-working-on-custom-si.jpg"
              alt="Debbie working on a custom sign"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-4xl font-bold">40+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-3 tracking-wide uppercase">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Crafting Signs That Tell Your Story
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Signs by Debbie, we believe every business has a unique story to tell. With decades of experience in
              the signage industry, we specialize in creating custom signs that capture your brand's personality and
              help you connect with customers.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From the initial design consultation to the final installation, we work closely with you to ensure your
              signage exceeds expectations. Our commitment to quality and customer satisfaction has made us a trusted
              partner for businesses throughout Texas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
