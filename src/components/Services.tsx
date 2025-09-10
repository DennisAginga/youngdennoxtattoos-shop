import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Zap, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Tattoos",
      description: "Unique designs crafted specifically for you",
      features: ["Black & Grey", "Color Work", "Minimalist", "Tribal", "Portrait"],
      priceRange: "KES 1,500 - 100,000"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Body Piercing",
      description: "Safe and stylish piercing services",
      features: ["Ear Piercing", "Nose", "Lips", "Navel", "Exotic Options"],
      priceRange: "KES 600 - 7,000"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Sterilized equipment and highest hygiene standards",
      features: ["Single-use needles", "Autoclave sterilization", "Licensed artists", "Clean environment"],
      priceRange: "Included"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Online Booking",
      description: "Schedule your appointment anytime, anywhere",
      features: ["24/7 booking", "Instant confirmation", "Flexible scheduling", "Reminder notifications"],
      priceRange: "Free service"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional artistry with the highest standards of safety and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-smooth group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-accent group-hover:scale-110 transition-bounce">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-accent font-semibold">{service.priceRange}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;