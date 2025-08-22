import {
  ExternalLink,
  Calendar,
  Laptop,
  MapPin,
  DollarSign,
  FileText,
} from "lucide-react";

export const RegistrationSection = () => {
  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-b from-muted/20 to-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 metallic-text">
            Registration
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-glow-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Registration Form Link */}
          <div
            className="cyber-border p-8 mb-8 hover-glow bg-gradient-to-br from-card to-muted/30"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center animate-glow-pulse">
                <ExternalLink className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold glow-text">Register Now</h3>
                <p className="text-muted-foreground">
                  Click the link below to register for the CTF
                </p>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrA-DYfiHsHsUtEhZmFPVEMrnVnEzFQ8M9CVHsXwgKxFg9pw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button inline-flex items-center gap-2 animate-glow-pulse"
            >
              <FileText className="w-5 h-5" />
              Open Registration Form
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Registration Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div
                className="cyber-border p-6 hover-glow bg-gradient-to-br from-card/50 to-muted/20"
                data-aos="fade-right"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-semibold glow-text">Deadline</h4>
                </div>
                <p className="text-lg font-bold text-foreground">
                  11 August 2025
                </p>
                <p className="text-muted-foreground">
                  Don't miss the registration deadline!
                </p>
              </div>

              <div
                className="cyber-border p-6 hover-glow bg-gradient-to-br from-card/50 to-muted/20"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-success" />
                  <h4 className="text-xl font-semibold glow-text">
                    Free Registration
                  </h4>
                </div>
                <p className="text-lg font-bold text-success">
                  No fees required!
                </p>
                <p className="text-muted-foreground">
                  This event is completely free to join
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div
                className="cyber-border p-6 hover-glow bg-gradient-to-br from-card/50 to-muted/20"
                data-aos="fade-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Laptop className="w-6 h-6 text-accent" />
                  <h4 className="text-xl font-semibold glow-text">
                    Requirements
                  </h4>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Laptop per participant
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Basic internet knowledge
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>A
                    curious mind!
                  </li>
                </ul>
              </div>

              <div
                className="cyber-border p-6 hover-glow bg-gradient-to-br from-card/50 to-muted/20"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-semibold glow-text">Location</h4>
                </div>
                <p className="text-lg font-bold text-foreground">
                  Atanaya Hotel
                </p>
                <p className="text-muted-foreground">Sunset Road, Kuta, Bali</p>
                <a
                  href="https://maps.app.goo.gl/hgrRP7MeweDDSfCR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-glow transition-colors duration-300 inline-flex items-center gap-1 mt-2"
                >
                  View on Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="cyber-border p-8 bg-gradient-to-r from-primary/10 to-accent/10 hover-glow">
              <h3 className="text-2xl font-bold glow-text mb-4">
                Ready to Join?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join us for an exciting cybersecurity competition in beautiful
                Bali. Test your skills, learn new techniques, and connect with
                fellow security enthusiasts!
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScrA-DYfiHsHsUtEhZmFPVEMrnVnEzFQ8M9CVHsXwgKxFg9pw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button inline-flex items-center gap-2 animate-glow-pulse"
              >
                Register Now
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
      <div
        className="absolute bottom-40 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};
