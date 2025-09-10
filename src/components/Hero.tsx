import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-tattoo-artist.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional tattoo artist at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-dark opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-accent bg-clip-text text-transparent">Young Dennox</span>
            <br />
            <span className="text-foreground">Tattoos</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where Art Meets Skin – Professional tattoo and body piercing services in the heart of Eldoret
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-sm">ICS College, Eldoret</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <Clock className="h-5 w-5 text-accent" />
            <span className="text-sm">Open Daily</span>
          </div>
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-sm">Professional Artists</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#booking">Book Your Session</a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#gallery">View Gallery</a>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">Follow us for daily inspiration</p>
          <a 
            href="https://instagram.com/youngdennoxtattoos" 
            className="text-accent hover:text-accent/80 transition-smooth font-semibold"
          >
            @youngdennoxtattoos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;