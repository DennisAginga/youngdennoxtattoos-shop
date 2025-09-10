import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
              Young Dennox Tattoos
            </h3>
            <p className="text-muted-foreground">
              Where Art Meets Skin – Professional tattoo and body piercing services in Eldoret.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/youngdennoxtattoos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="tel:+254743569411"
                className="text-muted-foreground hover:text-accent transition-smooth"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-muted-foreground hover:text-accent transition-smooth">
                Home
              </a>
              <a href="#services" className="text-muted-foreground hover:text-accent transition-smooth">
                Services
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-accent transition-smooth">
                Gallery
              </a>
              <a href="#booking" className="text-muted-foreground hover:text-accent transition-smooth">
                Book Now
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-accent transition-smooth">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground">ICS College Area</p>
                  <p className="text-muted-foreground">Next to Eldomatt Wholesale, Eldoret</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">+254743569411</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5 text-accent" />
                <span className="text-sm">@youngdennoxtattoos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Pricing */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Services & Pricing</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tattoos:</span>
                  <span>KES 1,500 - 100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Body Piercing:</span>
                  <span>KES 600 - 7,000</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  *Prices vary based on size, complexity, and placement
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Business Hours</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Young Dennox Tattoos. All rights reserved. | Professional tattoo & piercing services in Eldoret
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;