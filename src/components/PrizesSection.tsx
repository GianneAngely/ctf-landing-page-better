import { Trophy, Gift, Award } from "lucide-react";

export const PrizesSection = () => {
  const prizes = [
    {
      place: "1st Place",
      icon: Trophy,
      amount: "IDR 1,000,000",
      bonus: "Official Merchandise",
      color: "from-yellow-400 to-yellow-600",
      glow: "shadow-yellow-400/50",
      medal: "🥇",
    },
    {
      place: "2nd Place",
      icon: Award,
      amount: "IDR 600,000",
      bonus: "Official Merchandise",
      color: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50",
      medal: "🥈",
    },
    {
      place: "3rd Place",
      icon: Gift,
      amount: "IDR 400,000",
      bonus: "Official Merchandise",
      color: "from-amber-600 to-amber-800",
      glow: "shadow-amber-600/50",
      medal: "🥉",
    },
  ];

  return (
    <section
      id="prizes"
      className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 metallic-text"
            data-aos="fade-up"
          >
            Prizes
          </h2>
          <p
            className="text-xl text-muted-foreground mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Cash prizes for the top teams!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-glow-pulse"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div
                key={index}
                className={`relative cyber-border p-8 text-center hover-glow bg-gradient-to-b from-card to-muted/30`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Medal emoji */}
                <div
                  className="text-6xl mb-4 animate-bounce"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {prize.medal}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center shadow-lg ${prize.glow} animate-glow-pulse`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Place */}
                <h3 className="text-2xl font-bold glow-text mb-4">
                  {prize.place}
                </h3>

                {/* Amount */}
                <div className="text-3xl font-bold text-foreground mb-2">
                  {prize.amount}
                </div>

                {/* Bonus */}
                <div className="text-muted-foreground">+ {prize.bonus}</div>

                {/* Decorative dots */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
              </div>
            );
          })}
        </div>

        {/* Additional prize info */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay={prizes.length * 150 + 100}
        >
          <div className="cyber-border p-6 max-w-2xl mx-auto bg-gradient-to-r from-card/50 to-muted/30 hover-glow">
            <h4 className="text-xl font-semibold glow-text mb-2">
              Competition Format
            </h4>
            <p className="text-muted-foreground">
              Individual competition - Each participant competes on their own to
              claim these amazing prizes!
            </p>
          </div>
        </div>
      </div>

      {/* Background floating effects */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-30"></div>
      <div
        className="absolute bottom-20 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-40"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};
