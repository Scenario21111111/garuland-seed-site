import { Leaf, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Naturally Grown",
    description:
      "Our sesame seeds are cultivated using sustainable farming practices, ensuring purity and optimal oil content for diverse applications.",
  },
  {
    icon: Shield,
    title: "Consistent Quality",
    description:
      "Rigorous quality control from harvest to delivery. Each batch is carefully dried, cleaned, and stored to meet international standards.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Dependable quantities for wholesalers, processors, and exporters. We maintain steady inventory to meet your business demands.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality From Source to Delivery
          </h2>
          <p className="text-muted-foreground text-lg">
            We take pride in delivering premium sesame seeds with unmatched reliability and honest business practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
