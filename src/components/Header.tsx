import { Button } from "@/components/ui/button";
import { Phone, Instagram, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
            Young Dennox Tattoos
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-accent transition-smooth">Home</a>
          <a href="#services" className="text-foreground hover:text-accent transition-smooth">Services</a>
          <a href="#gallery" className="text-foreground hover:text-accent transition-smooth">Gallery</a>
          <a href="#contact" className="text-foreground hover:text-accent transition-smooth">Contact</a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="booking" size="sm" asChild>
            <a href="#booking">Book Now</a>
          </Button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+254743569411</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;