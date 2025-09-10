import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import design images
import skullRoses from "@/assets/tattoo-skull-roses.jpg";
import dragonColor from "@/assets/tattoo-dragon-color.jpg";
import geometric from "@/assets/tattoo-geometric.jpg";
import tribalPhoenix from "@/assets/tattoo-tribal-phoenix.jpg";
import earJewelry from "@/assets/piercing-ear-jewelry.jpg";
import noseCollection from "@/assets/piercing-nose-collection.jpg";

const Gallery = () => {
  const tattooDesigns = [
    {
      id: 1,
      image: skullRoses,
      title: "Skull & Roses",
      category: "Black & Grey",
      size: "Medium",
      estimatedPrice: "KES 15,000 - 25,000",
      description: "Classic skull with intricate rose details"
    },
    {
      id: 2,
      image: dragonColor,
      title: "Traditional Dragon",
      category: "Color Work",
      size: "Large", 
      estimatedPrice: "KES 35,000 - 60,000",
      description: "Vibrant Japanese-style dragon design"
    },
    {
      id: 3,
      image: geometric,
      title: "Geometric Triangle",
      category: "Minimalist",
      size: "Small",
      estimatedPrice: "KES 3,000 - 8,000",
      description: "Clean modern geometric pattern"
    },
    {
      id: 4,
      image: tribalPhoenix,
      title: "Tribal Phoenix",
      category: "Tribal",
      size: "Large",
      estimatedPrice: "KES 25,000 - 45,000",
      description: "Powerful phoenix with tribal elements"
    }
  ];

  const piercingOptions = [
    {
      id: 1,
      image: earJewelry,
      title: "Ear Piercing Collection",
      types: ["Lobe", "Helix", "Tragus", "Conch"],
      estimatedPrice: "KES 600 - 3,000",
      description: "Various ear piercing options with premium jewelry"
    },
    {
      id: 2,
      image: noseCollection,
      title: "Nose Piercing Styles",
      types: ["Nostril", "Septum", "Bridge"],
      estimatedPrice: "KES 800 - 2,500",
      description: "Professional nose piercing with quality jewelry"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Design <span className="gradient-accent bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of tattoo designs and piercing options with estimated pricing
          </p>
        </div>

        {/* Tattoo Designs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tattoo Designs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tattooDesigns.map((design) => (
              <Card key={design.id} className="bg-card border-border hover:border-accent/50 transition-smooth group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{design.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{design.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{design.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span>{design.size}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-accent font-semibold">{design.estimatedPrice}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Select This Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Piercing Options */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Body Piercing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {piercingOptions.map((option) => (
              <Card key={option.id} className="bg-card border-border hover:border-accent/50 transition-smooth group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {option.types.map((type, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-center">
                      <span className="text-accent font-semibold">{option.estimatedPrice}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Book Piercing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Prices vary based on size, complexity, and placement. Contact us for accurate quotes.
          </p>
          <Button variant="accent" size="lg">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;