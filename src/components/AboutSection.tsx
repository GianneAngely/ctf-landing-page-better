export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-card"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 metallic-text">
            About the CTF
          </h2>

          <div className="cyber-border p-8 md:p-12 hover-glow">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The Sawah Cyber Security CTF is a thrilling 4 hours intense CTF
              cybersecurity competition set on the beautiful island of Bali. It
              brings together students, professionals, and cyber enthusiasts to
              take on a variety of real-world hacking challenges.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Participants will face tasks across categories such as Web
              Exploitation, Reverse Engineering, Binary Exploitation, OSINT, and
              even AI-related challenges. Each challenge is carefully crafted to
              test your problem-solving skills, critical thinking, and
              cybersecurity knowledge.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Whether you're a complete beginner eager to explore ethical
              hacking or an experienced CTF player looking to sharpen your
              skills, this event offers something for everyone. Beyond the
              competition, it's a chance to collaborate, learn, and be inspired
              by fellow tech enthusiasts.
            </p>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <p className="text-base text-foreground/80 italic">
                "Get ready to uncover vulnerabilities, decode secrets, and climb
                your way to the top of the scoreboard – all while enjoying the
                creative and energetic atmosphere of Bali's cybersecurity
                community."
              </p>
            </div>

            <p className="text-base text-muted-foreground mt-6">
              This competition is hosted by Sawah Cyber Security as part of our
              initiative to promote cybersecurity awareness in Indonesia. We aim
              to bridge academic and professional communities by encouraging
              ethical hacking practices and industry-level skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
