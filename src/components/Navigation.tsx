import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [eventDropdown, setEventDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setAboutDropdown(false);
    setEventDropdown(false);
  };

  return (
    <nav
      data-aos="fade-down"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo Sawah Cyber Security"
              className="w-30 h-10 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-glow"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors duration-300 relative group flex items-center gap-1 hover-glow">
                About
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutDropdown ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              {aboutDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 cyber-border bg-card/95 backdrop-blur-md rounded-lg p-2 min-w-[180px] z-50"
                  data-aos="fade-up"
                  data-aos-duration="200"
                >
                  <button
                    onClick={() => scrollToSection("about")}
                    className="block w-full text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300"
                  >
                    About the CTF
                  </button>
                  <button
                    onClick={() => scrollToSection("categories")}
                    className="block w-full text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300"
                  >
                    Categories
                  </button>
                </div>
              )}
            </div>

            {/* Event Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventDropdown(true)}
              onMouseLeave={() => setEventDropdown(false)}
            >
              <button className="text-foreground hover:text-primary transition-colors duration-300 relative group flex items-center gap-1 hover-glow">
                Event
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    eventDropdown ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              {eventDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 cyber-border bg-card/95 backdrop-blur-md rounded-lg p-2 min-w-[180px] z-50"
                  data-aos="fade-up"
                  data-aos-duration="200"
                >
                  <button
                    onClick={() => scrollToSection("event-details")}
                    className="block w-full text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300"
                  >
                    Event Details
                  </button>
                  <button
                    onClick={() => scrollToSection("timeline")}
                    className="block w-full text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/10 rounded transition-all duration-300"
                  >
                    Timeline
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("prizes")}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-glow"
            >
              Prizes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("registration")}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-glow"
            >
              Registration
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("partners")}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-glow"
            >
              Our Partners
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group hover-glow"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden mt-4 bg-card/95 backdrop-blur-md rounded-lg border border-primary/20 p-4"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About the CTF" },
              { id: "categories", label: "Categories" },
              { id: "event-details", label: "Event Details" },
              { id: "timeline", label: "Timeline" },
              { id: "prizes", label: "Prizes" },
              { id: "registration", label: "Registration" },
              { id: "partners", label: "Our Partners" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
