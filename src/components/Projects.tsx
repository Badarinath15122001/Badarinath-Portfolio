import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string;
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "An Efficient Approach for StackOverflow Label Prediction Using Machine Learning",
      description:
        "Built a machine learning model with Logistic Regression (One-vs-Rest Classifier) to predict Stack Overflow tags from question titles/descriptions. Pre-processed a dataset of 1M+ records using Python (NLTK, Pandas, NumPy). Achieved micro F1 score: 0.374, Hamming loss: 0.0004. Implemented with SQLite, Anaconda, Jupyter Notebook.",
      tech: "Python • Machine Learning • Logistic Regression • NLTK • Pandas • NumPy • SQLite",
      githubUrl: "https://github.com/Badarinath15122001/Label-Prediction-Using-Machine-Learning",
    },
    {
      title: "Automation Testing on E-Commerce Website (nopCommerce)",
      description:
        "Automated nopCommerce website workflows using Java, Selenium WebDriver, TestNG, JUnit, Cucumber with a Page Object Model (POM) framework and integrated Extent Reports for execution results. Managed project lifecycle with JIRA (bug tracking), GitHub (version control), Jenkins (CI/CD).",
      tech: "Java • Selenium WebDriver • TestNG • JUnit • Cucumber • POM • Extent Reports • JIRA • Jenkins",
      githubUrl: "https://github.com/Badarinath15122001/Capstone-NopCommerce/tree/master/Automation",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-40 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Project Icon/Visual */}
                <div className="w-full md:w-48 h-48 flex-shrink-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Github className="w-20 h-20 text-primary" />
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(" • ").map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/10 rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="hero"
                    className="group/btn"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    View on GitHub
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
