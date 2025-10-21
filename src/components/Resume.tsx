import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <Card className="p-8 md:p-12 text-center shadow-card border-2 hover:border-accent transition-all">
            <div className="bg-gradient-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my education, skills, projects, and experience in data science. 
              Includes detailed information about my technical expertise and achievements.
            </p>

            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Download className="w-5 h-5 mr-2" />
              Download Resume (PDF)
            </Button>

            <div className="mt-8 pt-8 border-t">
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's in Data Science<br />
                    Relevant coursework and GPA
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Internships, projects<br />
                    Research work
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional certificates<br />
                    Online course completions
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
