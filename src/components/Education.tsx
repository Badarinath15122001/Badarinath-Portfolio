import { GraduationCap, BookOpen, School } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  icon: any;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Institute of Aeronautical Engineering",
      location: "Hyderabad",
      duration: "2019 - 2023",
      score: "CGPA: 7.63",
      icon: GraduationCap,
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      location: "Hyderabad",
      duration: "2017 - 2019",
      score: "Percentage: 76.7%",
      icon: BookOpen,
    },
    {
      degree: "High School (10th Standard)",
      institution: "Vignan Bo-tree School",
      location: "Hyderabad",
      duration: "2016 - 2017",
      score: "CGPA: 8.6",
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <edu.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:gradient-text transition-all">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground/80">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span className="font-semibold text-primary">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;