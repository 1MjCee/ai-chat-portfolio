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
    title: "Job Sync AI",
    description:
      "Currently developing an AI-powered job matching platform that enhances CVs and generates tailored applications. Users upload CVs, receive personalized job recommendations, custom CVs, and cover letters, with features like skills gap analysis and application tracking. Built with Next.js and OpenAI, styled with Tailwind CSS (ongoing).",
    technologies: [
      "Next.js",
      "JavaScript",
      "OpenAI",
      "Tailwind CSS",
      "django",
      "Rest Apis",
      "postgres DB",
    ],
    icon: "JobIcon",
    iconBg: "bg-gradient-to-r from-cyan-500 to-blue-500",
    links: [
      {
        icon: "GithubIcon",
        url: "https://github.com/1MjCee/JobSyncAI",
        label: "View Code",
      },
      {
        icon: ExternalLinkIcon,
        url: "https://www.webtestingdomain.online/",
        label: "Live Demo",
      },
    ],
  },
  {
    title: "AI Job Application Optimizer",
    description:
      "Built a web application to optimize resumes and cover letters for ATS compatibility. Users upload PDF/DOCX documents, input job descriptions, and receive tailored documents with enhanced keywords and formatting, powered by OpenAI and Streamlit.",
    technologies: ["Python", "Streamlit", "OpenAI", "pdfplumber", "ReportLab"],
    icon: "ResumeIcon",
    iconBg: "bg-gradient-to-r from-teal-500 to-cyan-500",
    links: [
      {
        icon: GithubIcon,
        url: "https://github.com/1MjCee/AI-Job-Appplication-optimizer",
        label: "View Code",
      },
      {
        icon: ExternalLinkIcon,
        url: "https://1mjcee-ai-job-appplication-optimizer-app-1zbpev.streamlit.app/",
        label: "Live Demo",
      },
    ],
  },
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
    title: "AI Research Agent",
    description:
      "Developed a web application that answers complex research queries with detailed, AI-generated responses. Users input questions or topics, and the app leverages OpenAI's language models to provide insights, built with a Streamlit interface for seamless interaction.",
    technologies: ["Python", "Streamlit", "OpenAI"],
    icon: "ResearchIcon",
    iconBg: "bg-gradient-to-r from-blue-500 to-indigo-500",
    links: [
      {
        icon: "GithubIcon",
        url: "https://github.com/1MjCee/research-ai-agent",
        label: "View Code",
      },
      {
        icon: ExternalLinkIcon,
        url: "https://1mjcee-research-ai-agent-app-ml5fal.streamlit.app/",
        label: "Live Demo",
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
    title: "AI Customer Assistant",
    description:
      "Created a Next.js-based chatbot integrated into a portfolio website, powered by OpenAI, to assist users with inquiries about my services and projects. Features a responsive chat interface with real-time responses and Tailwind CSS styling for a modern user experience.",
    technologies: ["Next.js", "JavaScript", "OpenAI", "Tailwind CSS"],
    icon: "ChatIcon",
    iconBg: "bg-gradient-to-r from-indigo-500 to-purple-500",
    links: [
      {
        icon: "GithubIcon",
        url: "https://github.com/1MjCee/ai-chat-portfolio",
        label: "View Code",
      },
      //   { icon: ExternalLinkIcon, url: "#", label: "Live Demo" },
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
