import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_bmwa4cf", // Replace with your actual service ID
        "template_6exyftc", // Replace with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ieK75u3smVt1Tiz_R" // Replace with your actual public key
      );

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 relative min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Collaborate</span> and Build
            Something Great!
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+917095231234"
                className="flex items-center gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="p-3 glass-card rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 7095231234</p>
                </div>
              </a>

              <a
                href="mailto:badarinath15122001@gmail.com"
                className="flex items-center gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="p-3 glass-card rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">badarinath15122001@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/badarinathsaibalaji/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="p-3 glass-card rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/badarinathsaibalaji</p>
                </div>
              </a>

              <a
                href="https://github.com/Badarinath15122001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:translate-x-2 transition-transform"
              >
                <div className="p-3 glass-card rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium">github.com/Badarinath15122001</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 glass-card rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl space-y-6 animate-fade-in-up"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="glass-card border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="glass-card border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="glass-card border-primary/20 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full glow-effect bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all"
            >
              Send Message
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
