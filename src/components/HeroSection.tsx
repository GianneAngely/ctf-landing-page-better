import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = () => {
  // Fungsi untuk scroll ke bagian registrasi
  const handleRegisterClick = () => {
    const registrationSection = document.getElementById("registration");
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="metallic-text">Sawah Cyber Security</span>
            <br />
            <span className="glow-text">CTF 2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            Discover the World of Ethical Hacking – Join Our 4 hours CTF
            Competition in Bali!
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We invite you to participate in an exciting 4 hours Capture The Flag
            (CTF) competition in the beautiful island of Bali. This event is
            designed to be beginner-friendly while still offering plenty of
            challenges for more experienced participants.
          </p>

          {/* CTA Button (INI YANG DIUBAH) */}
          <button
            onClick={handleRegisterClick}
            className="cyber-button mb-12 animate-glow-pulse"
          >
            Register Now
          </button>

          {/* Countdown */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4 glow-text">
              Event Starts In:
            </h3>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};
