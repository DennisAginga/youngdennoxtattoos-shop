import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Clock, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find <span className="gradient-accent bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Eldoret - easy to find, professional service guaranteed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-accent" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Young Dennox Tattoos</h3>
                  <p className="text-muted-foreground">
                    ICS College Area<br />
                    Next to Eldomatt Wholesale<br />
                    Eldoret, Kenya
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a 
                    href="https://maps.google.com/search/ICS+College+Eldoret" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg">+254743569411</p>
                  <p className="text-sm text-muted-foreground">Available during business hours</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-accent" />
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">@youngdennoxtattoos</p>
                  <p className="text-sm text-muted-foreground">Daily inspiration & updates</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm font-medium text-accent">
                    Walk-ins welcome, but appointments recommended!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Young Dennox?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Professional Artists</h4>
                      <p className="text-sm text-muted-foreground">
                        Experienced and licensed tattoo artists with years of expertise
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Highest Safety Standards</h4>
                      <p className="text-sm text-muted-foreground">
                        Single-use needles, autoclave sterilization, and pristine environment
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Custom Designs</h4>
                      <p className="text-sm text-muted-foreground">
                        Unique artwork tailored to your vision and style preferences
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Convenient Location</h4>
                      <p className="text-sm text-muted-foreground">
                        Easy to find location near ICS College with parking available
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Competitive Pricing</h4>
                      <p className="text-sm text-muted-foreground">
                        Fair pricing with transparent quotes - no hidden costs
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border gradient-primary">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-primary-foreground">Ready to Get Started?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Let your body be your canvas. Book your session today!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="accent" size="lg" className="flex-1" asChild>
                    <a href="#booking">Book Now</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" 
                    asChild
                  >
                    <a href="tel:+254743569411">Call Direct</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;