import { Calendar } from "lucide-react";

export const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "9 June 2025",
      title: "Open Registration",
      description: "Registration opens for all participants",
      side: "left",
    },
    {
      date: "11 August 2025",
      title: "End of Registration",
      description: "Last day to register for the competition",
      side: "right",
    },
    {
      date: "22 August 2025",
      title: "Technical Briefing",
      description: "Technical briefing for all participants",
      side: "left",
    },
    {
      date: "23 August 2025",
      title: "Competition Day",
      description: "1PM-5PM Half Day CTF Challenge",
      side: "right",
    },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 metallic-text"
            data-aos="fade-up"
          >
            Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-glow-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-glow to-primary rounded-full animate-glow-pulse"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                event.side === "left" ? "flex-row-reverse" : ""
              }`}
              data-aos={event.side === "left" ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              {/* Content Box */}
              <div
                className={`w-5/12 ${
                  event.side === "left" ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="cyber-border p-6 hover-glow">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold glow-text">
                      {event.date}
                    </h3>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-primary-glow rounded-full border-4 border-background animate-glow-pulse z-10">
                <div className="w-full h-full bg-primary-glow rounded-full animate-ping opacity-30"></div>
              </div>

              {/* Spacer to balance grid */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Decorations */}
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
