// import { Briefcase, Code2, Award, TrendingUp } from "lucide-react";
// import profilePhoto from "../assets/profile.jpg";

// const About = () => {
//   const highlights = [
//     {
//       icon: Briefcase,
//       title: "Training",
//       description: "Java Selenium Training @ Wipro (2025)",
//     },
//     {
//       icon: Code2,
//       title: "Technologies",
//       description: "Python, Java, C, Selenium, Power BI, MySQL",
//     },
//     {
//       icon: TrendingUp,
//       title: "Specialties",
//       description: "Automation Testing, Data Analytics, Machine Learning",
//     },
//     {
//       icon: Award,
//       title: "Certifications",
//       description: "8+ Professional Certifications",
//     },
//   ];

//   return (
//     <section id="about" className="py-20 relative">
//       <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           About <span className="gradient-text">Me</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//           {/* Profile Image */}
//           <div className="relative animate-fade-in-up">
//             <div className="relative w-full max-w-md mx-auto">
//               <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-glow" />
//               <img
//                 src={profilePhoto}
//                 alt="Badarinath Sai Balaji Nannapaneni"
//                 className="relative rounded-full w-full aspect-square object-cover border-4 border-primary/20"
//               />
//             </div>
//           </div>

//           {/* Bio and Highlights */}
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold">
//                 Computer Science Graduate
//               </h3>
//               <p className="text-muted-foreground leading-relaxed text-justify">
//                 Highly motivated and results-oriented Computer Science graduate with a strong 
//                 foundation in programming (Python, Java, C), databases (SQL), web development, 
//                 and machine learning. Certified in Python, IoT, AI, and data analytics.
//               </p>
//               <p className="text-muted-foreground leading-relaxed text-justify">
//                 Quick learner with strong problem-solving skills, eager to contribute technical 
//                 expertise to innovative projects and grow professionally. Currently completed 
//                 Java Selenium training at Wipro with hands-on experience in automation testing, 
//                 CI/CD pipelines, and version control.
//               </p>
//             </div>

//             {/* Highlight Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {highlights.map((item, index) => (
//                 <div
//                   key={index}
//                   className="glass-card p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
//                   <h4 className="font-semibold mb-1">{item.title}</h4>
//                   <p className="text-sm text-muted-foreground">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { Briefcase, Code2, Award, TrendingUp } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Training",
      description: "Java Selenium Training @ Wipro (2025)",
    },
    {
      icon: Code2,
      title: "Technologies",
      description: "Python, Java, C, Selenium, Power BI, MySQL",
    },
    {
      icon: TrendingUp,
      title: "Specialties",
      description: "Automation Testing, Data Analytics, Machine Learning",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "8+ Professional Certifications",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-glow" />
              <img
                src={profilePhoto}
                alt="Badarinath Sai Balaji Nannapaneni"
                className="relative rounded-full w-44 sm:w-56 md:w-full aspect-square object-cover border-4 border-primary/20 mx-auto"
              />
            </div>
          </div>

          {/* Bio and Highlights */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Computer Science Graduate
              </h3>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Highly motivated and results-oriented Computer Science graduate with a strong 
                foundation in programming (Python, Java, C), databases (SQL), web development, 
                and machine learning. Certified in Python, IoT, AI, and data analytics.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Quick learner with strong problem-solving skills, eager to contribute technical 
                expertise to innovative projects and grow professionally. Currently completed 
                Java Selenium training at Wipro with hands-on experience in automation testing, 
                CI/CD pipelines, and version control.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
