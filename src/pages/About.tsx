import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import sesameTexture from "@/assets/sesame-texture.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Magadi Road, Emmanuel House, First Floor\nP.O. Box 125-00200, Nairobi, Kenya",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 722 632 408",
    href: "tel:+254722632408",
  },
  {
    icon: Mail,
    label: "Email",
    value: "samtern@gmail.com",
    href: "mailto:samtern@gmail.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday: 8:00 AM – 5:00 PM",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={sesameTexture}
              alt="Sesame seeds background"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in-up opacity-0">
                About Our Company
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 animation-delay-100">
                Garuland Enterprises
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up opacity-0 animation-delay-200">
                Your trusted partner for premium sesame seeds in East Africa
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Company Description */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Our Commitment to Quality
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Garuland Enterprises is a leading supplier of premium sesame seeds based in Nairobi, Kenya. 
                    We specialize in freshly hauled sesame seeds that are naturally grown, well-dried, and 
                    properly stored to preserve their purity, oil content, and market value.
                  </p>
                  <p>
                    Our commitment to quality and professionalism has made us a trusted partner for 
                    wholesalers, processors, retailers, and exporters throughout East Africa and beyond. 
                    We pride ourselves on reliable quantities and honest business practices.
                  </p>
                  <p>
                    Every batch of our sesame seeds is carefully handled from source to delivery, ensuring 
                    you receive products that meet the highest standards for your specific applications.
                  </p>
                </div>

                {/* Product Applications */}
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Product Applications
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Food Processing",
                      "Oil Extraction",
                      "Baking & Confectionery",
                      "Industrial Use",
                      "Bulk Supply",
                      "Export Markets",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 bg-secondary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-card rounded-xl p-8 shadow-elevated">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-lg">
                  Interested in our sesame seeds? Send us a message for orders, partnerships, or inquiries.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow-elevated">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
