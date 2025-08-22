export const PartnersSection = () => {
  const communityPartners = [
    {
      name: "Timedoor",
      logo: "/timedoor.png",
      website: "https://timedoor.net",
    },
    {
      name: "TCP1P",
      logo: "https://tcp1p.team/_next/static/media/TCP1P%20_Main%20White%20Red.89fd023d.svg",
      website: "https://tcp1p.team",
    },
    {
      name: "Meta4Sec",
      logo: "/meta4sec-hitam.png",
      website: "https://meta4sec.com/",
    },
    {
      name: "ATANAYA",
      logo: "/ATANAYA.png",
      website: "https://atanaya.com/",
    },
  ];

  const academicPartners = [
    {
      name: "Politeknik Negeri Bali",
      logo: "https://www.pnb-gianyar.ac.id/wp-content/uploads/2022/05/Logo-Politeknik-Negeri-Bali.png",
      website: "https://www.pnb-gianyar.ac.id",
    },
    {
      name: "Undhira Bali",
      logo: "/LOGO-UNDHIRA.png",
      website: "#",
    },
  ];

  return (
    <section
      id="partners"
      className="py-20 bg-gradient-to-b from-background to-muted/30 relative"
    >
      <div className="container mx-auto px-4">
        {/* Community Partners */}
        <div className="mb-16">
          <div
            className="text-center mb-12"
            data-aos="fade-up-right"
            data-aos-duration="800"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 metallic-text">
              Community Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-glow-pulse"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {communityPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="cyber-border p-6 hover-glow bg-card/50 backdrop-blur-sm group"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 md:h-20 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                    style={{
                      filter: "brightness(0.9) contrast(1.1)",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Partners */}
        <div>
          <div
            className="text-center mb-12"
            data-aos="fade-up-left"
            data-aos-duration="800"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 metallic-text">
              Academic Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-glow-pulse"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {academicPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="cyber-border p-6 hover-glow bg-card/50 backdrop-blur-sm group"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 md:h-20 w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                    style={{
                      filter: "brightness(0.9) contrast(1.1)",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <div className="cyber-border p-8 max-w-2xl mx-auto bg-gradient-to-r from-card/50 to-muted/30 hover-glow">
            <h3 className="text-2xl font-bold glow-text mb-4">
              Become a Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in partnering with Sawah Cyber Security? Join us in
              promoting cybersecurity awareness in Indonesia.
            </p>
            <a
              href="mailto:ctf@sawahcyber.id"
              className="cyber-button inline-flex items-center gap-2 animate-glow-pulse"
            >
              Contact Us for Partnership
            </a>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
      <div
        className="absolute bottom-40 right-20 w-4 h-4 bg-accent rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};
