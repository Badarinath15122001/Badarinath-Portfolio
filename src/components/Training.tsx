
import { GraduationCap } from "lucide-react";

const Training = () => {
  return (
    <section id="training" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="gradient-text">Training</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl hover:scale-110 transition-transform flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>

              <div className="flex-1 space-y-3">
                <h4 className="text-xl md:text-2xl font-bold gradient-text">
                  Java Selenium Training
                </h4>
                <p className="text-lg text-muted-foreground">Wipro</p>
                <p className="text-sm text-muted-foreground/80">
                  July 2025 - September 2025
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-justify">
                      Completed training on Java Selenium, covering Selenium WebDriver, TestNG, JUnit, Cucumber, and POM framework with Extent Reports for reporting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-justify">
                      Gained hands-on exposure to JIRA (bug tracking), GitHub (version control), and Jenkins (CI/CD pipeline integration).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
