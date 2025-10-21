import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University)",
    date: "2024",
    skills: ["Supervised Learning", "Neural Networks", "Unsupervised Learning"],
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM (Coursera)",
    date: "2023",
    skills: ["Python", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    skills: ["CNNs", "RNNs", "TensorFlow"],
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis (Coursera)",
    date: "2023",
    skills: ["SQL", "Database Management", "Query Optimization"],
  },
  {
    title: "Data Visualization with Tableau",
    issuer: "Tableau (Udemy)",
    date: "2023",
    skills: ["Tableau", "Dashboard Design", "Storytelling"],
  },
  {
    title: "Python for Data Science",
    issuer: "Kaggle",
    date: "2023",
    skills: ["Python", "Pandas", "NumPy"],
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Button variant="ghost" size="icon" className="hover:text-accent">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
