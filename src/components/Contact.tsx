import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileCode } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "shedrackmossesmollel@gmail.com",
    icon: Mail,
    href: "mailto:shedrackmossesmollel@gmail.com?subject=Portfolio Contact",
    color: "bg-red-500",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "bg-blue-600",
  },
  {
    name: "GitHub",
    value: "github.com/1212shedrack",
    icon: Github,
    href: "https://github.com",
    color: "bg-gray-800",
  },
  {
    name: "Kaggle",
    value: "kaggle.com/shedrackmossesmollel@gmail.com",
    icon: FileCode,
    href: "https://kaggle.com",
    color: "bg-cyan-500",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <Card className="p-8 md:p-12 shadow-card border-2">
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or collaborations. 
              Feel free to reach out through any of the following channels.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent">
                      <div className="flex items-center gap-4">
                        <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold mb-1">{link.name}</h3>
                          <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Or send me a direct message</p>
              <Button size="lg" className="bg-gradient-accent hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
