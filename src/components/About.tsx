import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="mb-12">
            <p className="text-lg text-muted-foreground text-center leading-relaxed">
              I'm a passionate data science enthusiast with a strong foundation in statistics, machine learning, 
              and data visualization. Currently pursuing my education in data science, I'm dedicated to turning 
              complex data into clear, actionable insights that drive decision-making and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent">
              <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                Bachelor's in Data Science<br />
                University Name<br />
                2021 - Present
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interests</h3>
              <p className="text-muted-foreground">
                Machine Learning<br />
                Data Visualization<br />
                Predictive Analytics
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent">
              <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Goal</h3>
              <p className="text-muted-foreground">
                To become a leading data scientist, solving complex problems and 
                creating innovative solutions that make a real-world impact.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
