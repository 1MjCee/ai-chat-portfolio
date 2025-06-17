// components/ProjectsSection.jsx
"use client";
import ProjectCard from "./ProjectCard";
import {
  GithubIcon,
  ExternalLinkIcon,
  CodeIcon,
  BrainIcon,
  ChartIcon,
} from "./Icons";

const projects = [
  {
    title: "Customer Churn Prediction Model",
    description:
      "Built a machine learning model to predict customer churn using ensemble methods. Achieved 94% accuracy with Random Forest and implemented feature importance analysis for business insights.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Matplotlib",
      "Random Forest",
    ],
    icon: BrainIcon,
    iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/DSF-Phase-3-Project-Predicting-Customer-Churn-at-SyriaTel-with-Machine-Learning",
        label: "View Code",
      },
      // { icon: ExternalLinkIcon, url: "#", label: "Live Demo" },
    ],
  },
  {
    title: "Box Office Data Scraping Project",
    description:
      "Implemented a Python script to scrape box office data from Box Office Mojo, extracting data from HTML tags and transforming it into a Pandas DataFrame for analysis, saved as a CSV file.",
    technologies: [
      "Python",
      "Pandas",
      "Requests",
      "Beautiful Soup",
      "HTML Parser",
    ],
    icon: "DataIcon",
    iconBg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/Web-scrapping-Box-Office-Mojo-movie-data-with-Beautiful-Soup",
        label: "View Code",
      },
    ],
  },
  {
    title: "Zillow Time Series Model",
    description:
      "Trained an ARIMA-based time series model to predict house prices, leveraging data preprocessing and visualization for accurate forecasting.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "Seaborn",
    ],
    icon: "ForecastIcon",
    iconBg: "bg-gradient-to-r from-orange-500 to-red-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/Forecasting-Real-Estate-Prices---Time-Series-Modeling",
        label: "View Code",
      },
    ],
  },
  {
    title: "Reducing Customer Churn",
    description:
      "Developed a classification model to predict customer churn at SyriaTel, achieving 0.95 accuracy and 0.85 F1-Score, with strategies to improve retention.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "SciPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
    ],
    icon: "ModelIcon",
    iconBg: "bg-gradient-to-r from-pink-500 to-rose-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/DSF-Phase-3-Project-Predicting-Customer-Churn-at-SyriaTel-with-Machine-Learning",
        label: "View Code",
      },
    ],
  },
  {
    title: "Predicting King County House Prices",
    description:
      "Built a linear regression model to predict house prices in King County, identifying key features for real estate investment decisions.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "SciPy",
      "Stats Model",
      "Scikit-Learn",
      "Matplotlib",
    ],
    icon: "RegressionIcon",
    iconBg: "bg-gradient-to-r from-green-500 to-lime-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/dsc-phase-2-project-v2-3",
        label: "View Code",
      },
    ],
  },
  {
    title: "Microsoft Studio Investment Recommendations",
    description:
      "Analyzed box office data to provide evidence-based recommendations on movie genres and release times for Microsoft Studios to maximize profits.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "Seaborn",
    ],
    icon: "AnalyticsIcon",
    iconBg: "bg-gradient-to-r from-yellow-500 to-amber-500",
    links: [
      {
        icon: "GithubIcon",
        url: "https://github.com/1MjCee/project_phase_1",
        label: "View Code",
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A showcase of my data science and full-stack development work
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
