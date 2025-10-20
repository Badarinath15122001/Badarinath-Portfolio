import { Award } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  year: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Data Analytics and Visualization",
      organization: "Accenture (Forage)",
      year: "Aug 2024",
    },
    {
      title: "Power BI Job Simulation",
      organization: "PwC (Forage)",
      year: "Sept 2024",
    },
    {
      title: "Python for Beginners",
      organization: "Simplilearn",
      year: "June 2022",
    },
    {
      title: "Introduction to the Fundamentals of Databases",
      organization: "Simplilearn",
      year: "June 2022",
    },
    {
      title: "Elements of AI",
      organization: "University of Helsinki (Minna Learn)",
      year: "Sept 2023",
    },
    {
      title: "Agile Methodology",
      organization: "Cognizant (Forage)",
      year: "Sept 2023",
    },
    {
      title: "Introduction to IoT",
      organization: "Simplilearn",
      year: "June 2022",
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      organization: "TCS",
      year: "Nov 2021",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Certifications</span> & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 group-hover:gradient-text transition-all">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    {cert.year}
                  </p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
