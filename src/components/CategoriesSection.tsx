import {
  Code,
  Shield,
  Search,
  Brain,
  Key,
  Database,
  Cpu,
  HelpCircle,
} from "lucide-react";

const categories = [
  { icon: Code, name: "Web Exploitation", color: "text-primary" },
  { icon: Cpu, name: "Binary Exploitation", color: "text-accent" },
  { icon: Shield, name: "Reverse Engineering", color: "text-success" },
  { icon: Database, name: "Forensics", color: "text-warning" },
  { icon: Key, name: "Cryptography", color: "text-primary-glow" },
  {
    icon: Search,
    name: "Open Source Intelligence (OSINT)",
    color: "text-accent-glow",
  },
  { icon: Brain, name: "AI & Machine Learning", color: "text-primary" },
  {
    icon: HelpCircle,
    name: "Miscellaneous Challenges",
    color: "text-muted-foreground",
  },
];

export const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 metallic-text">
          Categories
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Challenge types you will face:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="cyber-border p-6 text-center hover-glow cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 flex justify-center">
                  <Icon
                    size={48}
                    className={`${category.color} group-hover:animate-glow-pulse transition-all duration-300`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
