import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sesame.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium golden sesame seeds in a burlap sack"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-primary-foreground">
          <span className="inline-block px-4 py-1 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in-up opacity-0">
            Premium Agricultural Supply
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            Premium Sesame Seeds – Freshly Hauled and Ready for Market
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in-up opacity-0 animation-delay-200">
            Garuland Enterprises supplies naturally grown, well-dried sesame seeds with consistent quality. 
            Perfect for local trade, bulk supply, and export markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-300">
            <Button asChild variant="hero" size="xl">
              <Link to="/about">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/about">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
