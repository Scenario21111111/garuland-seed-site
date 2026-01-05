import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-lg">G</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg">Garuland</span>
                <span className="text-primary-foreground/70 text-sm block -mt-1">Enterprises</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premium sesame seeds supplier serving wholesalers, processors, and exporters across Kenya and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Magadi Road, Emmanuel House, First Floor</li>
              <li>P.O. Box 125-00200, Nairobi, Kenya</li>
              <li>
                <a href="tel:+254722632408" className="hover:text-secondary transition-colors">
                  +254 722 632 408
                </a>
              </li>
              <li>
                <a href="mailto:samtern@gmail.com" className="hover:text-secondary transition-colors">
                  samtern@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-display text-lg italic mb-2">
            "Quality you can trust. Supply you can rely on."
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Garuland Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
