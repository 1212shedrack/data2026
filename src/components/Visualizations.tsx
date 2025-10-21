import { Card } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Activity } from "lucide-react";

const visualizations = [
  {
    title: "Sales Performance Dashboard",
    tool: "Power BI",
    description: "Interactive dashboard showing quarterly sales trends, regional performance, and customer segments.",
    icon: BarChart3,
  },
  {
    title: "Market Share Analysis",
    tool: "Tableau",
    description: "Visual analysis of market share distribution across product categories and competitors.",
    icon: PieChart,
  },
  {
    title: "Customer Behavior Heatmap",
    tool: "Plotly",
    description: "Heatmap visualization of customer engagement patterns across different time periods.",
    icon: Activity,
  },
  {
    title: "Revenue Forecasting",
    tool: "Python + Matplotlib",
    description: "Time series forecasting visualizations predicting future revenue trends.",
    icon: TrendingUp,
  },
];

export const Visualizations = () => {
  return (
    <section id="visualizations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Visualizations & Dashboards</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {visualizations.map((viz, idx) => {
              const Icon = viz.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-card transition-all duration-300 border-2 hover:border-accent group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{viz.title}</h3>
                      <p className="text-sm text-accent font-medium mb-3">{viz.tool}</p>
                      <p className="text-muted-foreground">{viz.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All visualizations are interactive and optimized for data exploration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
