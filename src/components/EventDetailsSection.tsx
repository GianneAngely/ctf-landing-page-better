import { Calendar, MapPin, Clock, Users, Laptop } from "lucide-react";

export const EventDetailsSection = () => {
  const dateLocationItems = [
    {
      icon: <Calendar className="text-primary" size={24} />,
      label: "Date",
      value: "Saturday, 23 August 2025",
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      label: "Location",
      value: "Atanaya Hotel - Sunset Road Kuta",
    },
    {
      icon: <Clock className="text-success" size={24} />,
      label: "Duration",
      value: "Half Day CTF (13.00 - 17.00 WITA)",
    },
  ];

  const whoCanJoinItems = [
    {
      icon: <Users className="text-primary" size={24} />,
      label: "Team",
      value: "Individually",
    },
    {
      icon: <Users className="text-accent" size={24} />,
      label: "Open to",
      value: "Students, professionals, enthusiasts",
    },
    {
      icon: <Laptop className="text-success" size={24} />,
      label: "Bring",
      value: "Your own laptop",
    },
  ];

  return (
    <section
      id="event-details"
      className="py-20 bg-gradient-to-b from-card to-background"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 metallic-text"
          data-aos="fade-up"
        >
          Event Details
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Date & Location */}
          <div className="cyber-border p-8 mb-8 hover-glow" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-6 glow-text flex items-center gap-3">
              <Calendar className="text-primary" />
              Date & Location
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dateLocationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {item.icon}
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Can Join */}
          <div className="cyber-border p-8 hover-glow" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-6 glow-text flex items-center gap-3">
              <Users className="text-primary" />
              Who Can Join?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoCanJoinItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {item.icon}
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
