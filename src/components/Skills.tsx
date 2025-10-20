import { useEffect, useRef, useState } from "react";
import { Code2, Coffee, FileCode, Bug, Database, Layout, BarChart3, GitBranch, TestTube, Trello, Settings, Sheet, Leaf, ClipboardList, Box } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: LucideIcon;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: "Python", level: 90, color: "from-primary to-secondary", icon: Code2 },
    { name: "Java", level: 85, color: "from-secondary to-accent", icon: Coffee },
    { name: "C", level: 80, color: "from-accent to-primary", icon: FileCode },
    { name: "OOPs", level: 90, color: "from-accent to-secondary", icon: Box },
    { name: "MySQL", level: 80, color: "from-secondary to-primary", icon: Database },
    { name: "HTML/CSS", level: 80, color: "from-accent to-secondary", icon: Layout },
    { name: "Excel", level: 85, color: "from-accent to-primary", icon: Sheet },
    { name: "Power BI", level: 75, color: "from-primary to-accent", icon: BarChart3 },
    { name: "Selenium", level: 85, color: "from-primary via-accent to-secondary", icon: Bug },
    { name: "TestNG/JUnit", level: 80, color: "from-secondary to-accent", icon: TestTube },
    { name: "Cucumber", level: 80, color: "from-primary via-accent to-secondary", icon: Leaf },
    { name: "Extent Reports", level: 75, color: "from-secondary to-primary", icon: ClipboardList },
    { name: "Git/GitHub", level: 85, color: "from-accent to-primary", icon: GitBranch },
    { name: "Jenkins", level: 75, color: "from-secondary to-accent", icon: Settings },
    { name: "Jira", level: 80, color: "from-primary to-secondary", icon: Trello },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted/20"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="url(#gradient-${index})"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={
                      isVisible
                        ? `${2 * Math.PI * 45 * (1 - skill.level / 100)}`
                        : `${2 * Math.PI * 45}`
                    }
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#923FFF" />
                      <stop offset="50%" stopColor="#583FFF" />
                      <stop offset="100%" stopColor="#7DBFFF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Skill Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <skill.icon className="w-12 h-12 md:w-16 md:h-16 gradient-text" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
