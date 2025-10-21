import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, TrendingUp, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "R", "SQL", "JavaScript"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: TrendingUp,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau", "Excel"],
  },
  {
    title: "Machine Learning",
    icon: Database,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Feature Engineering"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "MySQL", "PostgreSQL"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
