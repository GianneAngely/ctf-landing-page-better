import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-primary/20 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="/logo.png"
                    alt="Logo Sawah Cyber Security"
                    className="w-30 h-20 object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cultivating Resilience and Securing Beyond Borders from Bali's
              Sawah Fields.
            </p>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold glow-text mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {/* LinkedIn */}
                <a
                  href="https://id.linkedin.com/company/sawah-cyber-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover-glow group"
                >
                  <svg
                    className="w-5 h-5 text-primary group-hover:text-primary-glow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/SawahCyber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover-glow group"
                >
                  <svg
                    className="w-5 h-5 text-primary group-hover:text-primary-glow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sawahcyber.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover-glow group"
                >
                  <svg
                    className="w-5 h-5 text-primary group-hover:text-primary-glow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sponsorship & Partnership */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold glow-text mb-6">
              Sponsorship & Partnership
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in partnering with us? Scan the QR code below or
              contact us directly.
            </p>
            <div className="cyber-border p-4 inline-block hover-glow bg-card/50 backdrop-blur-sm">
              <img
                src="/qrcode_sponsor.png"
                alt="Sponsorship QR Code"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold glow-text mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Jl. Pura Demak, Pemecutan Klod, Kota Denpasar, Bali 80119
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <a
                    href="/cdn-cgi/l/email-protection#6370060f1d021f022a1f021f020f1523000714"
                    className="text-primary hover:text-primary-glow transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    <span
                      className="__cf_email__"
                      data-cfemail="6370060f1d021f022a1f021f020f1523000714"
                    >
                      ctf@sawahcyber.id
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <a
                    href="tel:+6282221896495"
                    className="text-primary hover:text-primary-glow transition-colors duration-300"
                  >
                    +62 822-2189-6495
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="border-t border-primary/20 mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground">
            © 2025 Sawah Cyber Security. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-30"></div>
      <div
        className="absolute bottom-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Cloudflare Email Decoder Script */}
      <script
        data-cfasync="false"
        type="text/javascript"
        src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
    </footer>
  );
};
