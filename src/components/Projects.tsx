import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description: "Built a machine learning model to predict customer churn with 89% accuracy using Random Forest and XGBoost algorithms.",
    problem: "High customer attrition affecting business revenue",
    dataset: "Telecom Customer Dataset (Kaggle)",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    results: "Identified key churn factors and improved retention strategy recommendations",
    demoLink: "https://chedy.netlify.app",   // ✅ Added this
    codeLink: "https://github.com/1212shedrack/my-portfolio.git" // optional if you want GitHub link

  },
  {
    title: "Crop Yield Forecasting",
    description: "Developed predictive models to forecast crop yields based on weather patterns, soil conditions, and historical data.",
    problem: "Unpredictable agricultural output affecting food security",
    dataset: "Agricultural Dataset (FAO)",
    techStack: ["Python", "TensorFlow", "NumPy", "Plotly"],
    results: "85% accuracy in yield predictions, helping farmers plan better",
  },
  {
    title: "Sales Analysis Dashboard",
    description: "Created an interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue insights.",
    problem: "Lack of visibility into sales performance metrics",
    dataset: "Retail Sales Dataset",
    techStack: ["Power BI", "SQL", "Excel", "DAX"],
    results: "Enabled data-driven decision making with real-time insights",
  },
  {
    title: "Sentiment Analysis with NLP",
    description: "Implemented natural language processing techniques to analyze customer sentiment from product reviews.",
    problem: "Manual analysis of thousands of customer reviews",
    dataset: "Amazon Product Reviews",
    techStack: ["Python", "NLTK", "Keras", "Word2Vec"],
    results: "Automated sentiment classification with 87% accuracy",
  },
  {
    title: "Soil Moisture Prediction",
    description: "IoT-based system using sensor data to predict soil moisture levels and optimize irrigation schedules.",
    problem: "Water wastage and inefficient irrigation practices",
    dataset: "IoT Sensor Data (Custom)",
    techStack: ["Python", "Scikit-learn", "PostgreSQL", "Seaborn"],
    results: "30% reduction in water usage while maintaining crop health",
  },
  {
    title: "COVID-19 Data Visualization",
    description: "Interactive dashboard tracking and visualizing COVID-19 statistics across different regions.",
    problem: "Complex pandemic data difficult to interpret",
    dataset: "WHO COVID-19 Dataset",
    techStack: ["Python", "Plotly Dash", "Pandas", "Mapbox"],
    results: "Clear visual representation of pandemic trends and patterns",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent flex flex-col"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <div className="mb-3">
                  <p className="text-sm font-semibold text-accent mb-1">Problem:</p>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-accent mb-1">Results:</p>
                  <p className="text-sm text-muted-foreground">{project.results}</p>
                </div>

                <div className="flex gap-2 mt-auto">
                  <div className="flex gap-2 mt-auto">
  {project.codeLink && (
    <Button
      size="sm"
      variant="outline"
      className="flex-1"
      asChild
    >
      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
        <Github className="w-4 h-4 mr-1" />
        Code
      </a>
    </Button>
  )}

  {project.demoLink && (
    <Button
      size="sm"
      className="flex-1 bg-gradient-accent hover:opacity-90"
      asChild
    >
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-1" />
        Demo
      </a>
    </Button>
  )}
</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
