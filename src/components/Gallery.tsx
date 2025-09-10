import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import design images
import skullRoses from "@/assets/tattoo-skull-roses.jpg";
import dragonColor from "@/assets/tattoo-dragon-color.jpg";
import geometric from "@/assets/tattoo-geometric.jpg";
import tribalPhoenix from "@/assets/tattoo-tribal-phoenix.jpg";
import koiFish from "@/assets/tattoo-koi-fish.jpg";
import wolfMoon from "@/assets/tattoo-wolf-moon.jpg";
import butterfly from "@/assets/tattoo-butterfly.jpg";
import compass from "@/assets/tattoo-compass.jpg";
import mandala from "@/assets/tattoo-mandala.jpg";
import lion from "@/assets/tattoo-lion.jpg";
import angelWings from "@/assets/tattoo-angel-wings.jpg";
import roses from "@/assets/tattoo-roses.jpg";
import eagle from "@/assets/tattoo-eagle.jpg";
import celtic from "@/assets/tattoo-celtic.jpg";
import snakeSword from "@/assets/tattoo-snake-sword.jpg";
import cherryBlossom from "@/assets/tattoo-cherry-blossom.jpg";
import octopus from "@/assets/tattoo-octopus.jpg";
import cross from "@/assets/tattoo-cross.jpg";
import biomech from "@/assets/tattoo-biomech.jpg";
import watercolor from "@/assets/tattoo-watercolor.jpg";
import tiger from "@/assets/tattoo-tiger.jpg";
import dreamcatcher from "@/assets/tattoo-dreamcatcher.jpg";
import phoenixFlames from "@/assets/tattoo-phoenix-flames.jpg";
import anchor from "@/assets/tattoo-anchor.jpg";
import tribalSun from "@/assets/tattoo-tribal-sun.jpg";
import music from "@/assets/tattoo-music.jpg";
import treeLife from "@/assets/tattoo-tree-life.jpg";
import clock from "@/assets/tattoo-clock.jpg";
import feather from "@/assets/tattoo-feather.jpg";
import sugarSkull from "@/assets/tattoo-sugar-skull.jpg";
import lighthouse from "@/assets/tattoo-lighthouse.jpg";
import heartBanner from "@/assets/tattoo-heart-banner.jpg";
import prayingHands from "@/assets/tattoo-praying-hands.jpg";
import galaxy from "@/assets/tattoo-galaxy.jpg";
import samurai from "@/assets/tattoo-samurai.jpg";
import infinity from "@/assets/tattoo-infinity.jpg";
import yinYang from "@/assets/tattoo-yin-yang.jpg";
import arrow from "@/assets/tattoo-arrow.jpg";
import mountains from "@/assets/tattoo-mountains.jpg";
import hamsa from "@/assets/tattoo-hamsa.jpg";
import eyeHorus from "@/assets/tattoo-eye-horus.jpg";

// Import piercing images
import earJewelry from "@/assets/piercing-ear-jewelry.jpg";
import noseCollection from "@/assets/piercing-nose-collection.jpg";
import tongueJewelry from "@/assets/piercing-tongue.jpg";
import eyebrowJewelry from "@/assets/piercing-eyebrow.jpg";
import lipJewelry from "@/assets/piercing-lip.jpg";
import navelJewelry from "@/assets/piercing-navel.jpg";
import dermalJewelry from "@/assets/piercing-dermal.jpg";
import industrialJewelry from "@/assets/piercing-industrial.jpg";
import nippleJewelry from "@/assets/piercing-nipple.jpg";
import cartilageJewelry from "@/assets/piercing-cartilage.jpg";

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
    },
    {
      id: 5,
      image: koiFish,
      title: "Japanese Koi Fish",
      category: "Color Work",
      size: "Large",
      estimatedPrice: "KES 40,000 - 70,000",
      description: "Traditional Japanese koi with water waves and cherry blossoms"
    },
    {
      id: 6,
      image: wolfMoon,
      title: "Wolf & Moon",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 30,000 - 55,000",
      description: "Howling wolf with mountain silhouette and moon"
    },
    {
      id: 7,
      image: butterfly,
      title: "Butterfly Wings",
      category: "Color Work",
      size: "Medium",
      estimatedPrice: "KES 12,000 - 20,000",
      description: "Delicate butterfly with intricate wing patterns"
    },
    {
      id: 8,
      image: compass,
      title: "Nautical Compass",
      category: "Black & Grey",
      size: "Medium",
      estimatedPrice: "KES 15,000 - 28,000",
      description: "Vintage compass rose with nautical elements"
    },
    {
      id: 9,
      image: mandala,
      title: "Sacred Mandala",
      category: "Dotwork",
      size: "Medium",
      estimatedPrice: "KES 18,000 - 32,000",
      description: "Intricate geometric mandala with spiritual symbolism"
    },
    {
      id: 10,
      image: lion,
      title: "Lion Portrait",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 35,000 - 65,000",
      description: "Realistic lion face with detailed mane"
    },
    {
      id: 11,
      image: angelWings,
      title: "Angel Wings",
      category: "Black & Grey",
      size: "Extra Large",
      estimatedPrice: "KES 60,000 - 100,000",
      description: "Majestic angel wings with detailed feathers"
    },
    {
      id: 12,
      image: roses,
      title: "Rose Bouquet",
      category: "Color Work",
      size: "Medium",
      estimatedPrice: "KES 20,000 - 35,000",
      description: "Red roses with thorns and leaves"
    },
    {
      id: 13,
      image: eagle,
      title: "Soaring Eagle",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 40,000 - 70,000",
      description: "Patriotic eagle with spread wings"
    },
    {
      id: 14,
      image: celtic,
      title: "Celtic Knot",
      category: "Traditional",
      size: "Medium",
      estimatedPrice: "KES 12,000 - 22,000",
      description: "Intricate Celtic interwoven patterns"
    },
    {
      id: 15,
      image: snakeSword,
      title: "Snake & Sword",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 25,000 - 45,000",
      description: "Snake coiled around medieval sword"
    },
    {
      id: 16,
      image: cherryBlossom,
      title: "Cherry Blossom",
      category: "Color Work",
      size: "Medium",
      estimatedPrice: "KES 15,000 - 28,000",
      description: "Delicate Japanese cherry blossom branch"
    },
    {
      id: 17,
      image: octopus,
      title: "Octopus Tentacles",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 35,000 - 60,000",
      description: "Detailed octopus with flowing tentacles"
    },
    {
      id: 18,
      image: cross,
      title: "Cross & Thorns",
      category: "Religious",
      size: "Medium",
      estimatedPrice: "KES 10,000 - 18,000",
      description: "Religious cross with crown of thorns"
    },
    {
      id: 19,
      image: biomech,
      title: "Biomechanical",
      category: "Cyberpunk",
      size: "Large",
      estimatedPrice: "KES 45,000 - 80,000",
      description: "Mechanical gears integrated with skin"
    },
    {
      id: 20,
      image: watercolor,
      title: "Watercolor Splash",
      category: "Watercolor",
      size: "Medium",
      estimatedPrice: "KES 20,000 - 35,000",
      description: "Abstract colorful paint splashes"
    },
    {
      id: 21,
      image: tiger,
      title: "Tiger Face",
      category: "Black & Grey",
      size: "Large",
      estimatedPrice: "KES 35,000 - 65,000",
      description: "Fierce tiger with detailed stripes"
    },
    {
      id: 22,
      image: dreamcatcher,
      title: "Dreamcatcher",
      category: "Native American",
      size: "Medium",
      estimatedPrice: "KES 15,000 - 25,000",
      description: "Traditional dreamcatcher with feathers"
    },
    {
      id: 23,
      image: phoenixFlames,
      title: "Phoenix Rising",
      category: "Color Work",
      size: "Large",
      estimatedPrice: "KES 50,000 - 85,000",
      description: "Phoenix rising from colorful flames"
    },
    {
      id: 24,
      image: anchor,
      title: "Anchor & Rope",
      category: "Nautical",
      size: "Medium",
      estimatedPrice: "KES 12,000 - 20,000",
      description: "Vintage nautical anchor with rope"
    },
    {
      id: 25,
      image: tribalSun,
      title: "Tribal Sun",
      category: "Tribal",
      size: "Large",
      estimatedPrice: "KES 20,000 - 35,000",
      description: "Bold tribal sun with rays"
    },
    {
      id: 26,
      image: music,
      title: "Music Notes",
      category: "Minimalist",
      size: "Medium",
      estimatedPrice: "KES 8,000 - 15,000",
      description: "Treble clef with flowing musical notes"
    },
    {
      id: 27,
      image: treeLife,
      title: "Tree of Life",
      category: "Celtic",
      size: "Large",
      estimatedPrice: "KES 30,000 - 50,000",
      description: "Celtic tree with intricate branches and roots"
    },
    {
      id: 28,
      image: clock,
      title: "Vintage Clock",
      category: "Steampunk",
      size: "Medium",
      estimatedPrice: "KES 18,000 - 30,000",
      description: "Pocket watch with mechanical gears"
    },
    {
      id: 29,
      image: feather,
      title: "Feather",
      category: "Native American",
      size: "Medium",
      estimatedPrice: "KES 10,000 - 18,000",
      description: "Detailed feather with flowing design"
    },
    {
      id: 30,
      image: sugarSkull,
      title: "Sugar Skull",
      category: "Day of the Dead",
      size: "Medium",
      estimatedPrice: "KES 16,000 - 28,000",
      description: "Colorful Day of the Dead skull"
    },
    {
      id: 31,
      image: lighthouse,
      title: "Lighthouse",
      category: "Nautical",
      size: "Large",
      estimatedPrice: "KES 25,000 - 45,000",
      description: "Lighthouse with crashing ocean waves"
    },
    {
      id: 32,
      image: heartBanner,
      title: "Heart & Banner",
      category: "Traditional",
      size: "Medium",
      estimatedPrice: "KES 10,000 - 18,000",
      description: "Classic heart with ribbon banner"
    },
    {
      id: 33,
      image: prayingHands,
      title: "Praying Hands",
      category: "Religious",
      size: "Medium",
      estimatedPrice: "KES 12,000 - 20,000",
      description: "Detailed hands with rosary beads"
    },
    {
      id: 34,
      image: galaxy,
      title: "Galaxy Space",
      category: "Color Work",
      size: "Large",
      estimatedPrice: "KES 40,000 - 75,000",
      description: "Cosmic galaxy with stars and nebula"
    },
    {
      id: 35,
      image: samurai,
      title: "Samurai Mask",
      category: "Japanese",
      size: "Large",
      estimatedPrice: "KES 35,000 - 60,000",
      description: "Traditional Japanese warrior mask"
    },
    {
      id: 36,
      image: infinity,
      title: "Infinity Symbol",
      category: "Minimalist",
      size: "Small",
      estimatedPrice: "KES 3,000 - 6,000",
      description: "Flowing infinity symbol with decorative elements"
    },
    {
      id: 37,
      image: yinYang,
      title: "Yin Yang",
      category: "Eastern",
      size: "Medium",
      estimatedPrice: "KES 8,000 - 15,000",
      description: "Balance symbol with decorative elements"
    },
    {
      id: 38,
      image: arrow,
      title: "Arrow",
      category: "Minimalist",
      size: "Small",
      estimatedPrice: "KES 4,000 - 8,000",
      description: "Detailed arrow with fletching"
    },
    {
      id: 39,
      image: mountains,
      title: "Mountain Range",
      category: "Landscape",
      size: "Large",
      estimatedPrice: "KES 30,000 - 55,000",
      description: "Mountain peaks with forest and sunrise"
    },
    {
      id: 40,
      image: hamsa,
      title: "Hamsa Hand",
      category: "Spiritual",
      size: "Medium",
      estimatedPrice: "KES 15,000 - 25,000",
      description: "Protective hand symbol with eye"
    },
    {
      id: 41,
      image: eyeHorus,
      title: "Eye of Horus",
      category: "Egyptian",
      size: "Medium",
      estimatedPrice: "KES 12,000 - 22,000",
      description: "Ancient Egyptian protection symbol"
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
    },
    {
      id: 3,
      image: tongueJewelry,
      title: "Tongue Piercing",
      types: ["Center", "Side", "Frenulum"],
      estimatedPrice: "KES 1,200 - 3,500",
      description: "Safe tongue piercing with surgical steel barbells"
    },
    {
      id: 4,
      image: eyebrowJewelry,
      title: "Eyebrow Piercing",
      types: ["Vertical", "Horizontal", "Anti-Eyebrow"],
      estimatedPrice: "KES 1,000 - 2,800",
      description: "Eyebrow piercing with curved barbells and rings"
    },
    {
      id: 5,
      image: lipJewelry,
      title: "Lip Piercing Collection",
      types: ["Labret", "Monroe", "Medusa", "Snake Bites"],
      estimatedPrice: "KES 900 - 3,200",
      description: "Various lip piercing styles with quality jewelry"
    },
    {
      id: 6,
      image: navelJewelry,
      title: "Navel Piercing",
      types: ["Standard", "Reverse", "Double"],
      estimatedPrice: "KES 1,500 - 4,000",
      description: "Belly button piercing with decorative curved barbells"
    },
    {
      id: 7,
      image: dermalJewelry,
      title: "Dermal Anchors",
      types: ["Single Point", "Multiple", "Surface"],
      estimatedPrice: "KES 2,000 - 7,000",
      description: "Surface piercings with microdermal anchors"
    },
    {
      id: 8,
      image: industrialJewelry,
      title: "Industrial Piercing",
      types: ["Standard", "Vertical", "Orbital"],
      estimatedPrice: "KES 1,800 - 4,500",
      description: "Ear cartilage piercing with long barbells"
    },
    {
      id: 9,
      image: nippleJewelry,
      title: "Nipple Piercing",
      types: ["Horizontal", "Vertical", "Pairs"],
      estimatedPrice: "KES 2,500 - 6,000",
      description: "Professional nipple piercing with quality barbells"
    },
    {
      id: 10,
      image: cartilageJewelry,
      title: "Cartilage Collection",
      types: ["Rook", "Daith", "Forward Helix", "Snug"],
      estimatedPrice: "KES 1,200 - 3,800",
      description: "Advanced ear cartilage piercing options"
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
            Explore our extensive collection of tattoo designs and piercing options with estimated pricing
          </p>
        </div>

        {/* Tattoo Designs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tattoo Designs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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