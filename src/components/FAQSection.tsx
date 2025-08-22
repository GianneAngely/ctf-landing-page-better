import { useState } from "react";
import { ChevronDown, MapPin, ExternalLink } from "lucide-react";

export const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this CTF event paid?",
      answer:
        "No. This CTF event is completely free and does not require any payment.",
    },
    {
      question: "Is the event held online or offline?",
      answer:
        "The event is held offline (onsite) and will take place at Atanaya Hotel Bali, Kuta, Bali. Detailed location information will be shared with registered participants.",
    },
    {
      question: "Can I participate in this event online?",
      answer:
        "No. This event is only available offline and does not offer an online participation option.",
    },
    {
      question: "Is the CTF competition individual or team-based?",
      answer:
        "This CTF competition is held individually, so each participant will compete on their own.",
    },
    {
      question:
        "Does the committee provide accommodation for participants from outside Bali?",
      answer:
        "No. Sawah Cyber Security as the organizer does not provide accommodation for out-of-town participants for this event.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-muted/30 to-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 metallic-text"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="cyber-border hover-glow bg-card/50 backdrop-blur-sm"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Note */}
          <div
            className="cyber-border p-6 hover-glow bg-gradient-to-r from-card/50 to-muted/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="text-muted-foreground text-center">
              <strong>Note:</strong> For more information and other inquiries,
              please contact one of the admins in the WhatsApp group.
            </p>
          </div>

          {/* Location Map */}
          <div className="mt-12" data-aos="zoom-in">
            <div className="cyber-border p-6 hover-glow bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold glow-text">Event Location</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Atanaya Hotel Bali
                </h4>
                <p className="text-muted-foreground mb-4">
                  Sunset Road, Kuta, Bali
                </p>
                <a
                  href="https://maps.app.goo.gl/hgrRP7MeweDDSfCR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-300"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden border border-primary/20 hover-glow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.874542068418!2d115.1803013!3d-8.7034624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246ce303f6449%3A0x5ff7f4647568d7e2!2sAtanaya%20Hotel%20-%20Kuta%2C%20Bali!5e0!3m2!1sen!2sid!4v1753927404258!5m2!1sen!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
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
