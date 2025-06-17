// Main component (Home.jsx or page.jsx)
"use client";
import { useState } from "react";
import { useChat } from "ai/react";
import BackgroundPattern from "@/components/BackgroundPattern";
import HeroSection from "@/components/HeroSection";
import AboutCard from "@/components/AboutCard";
import ChatInstructionsCard from "@/components/ChatInstructionsCard";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ChatWindow from "@/components/ChatWindow";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <BackgroundPattern />

      <div className="relative max-w-6xl mx-auto py-20 px-6">
        <HeroSection />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AboutCard />
          <ChatInstructionsCard />
        </div>

        <TechStack />
        <div className="mt-20">
          <ProjectsSection />
        </div>
        <ContactSection />
      </div>

      <Footer />

      <ChatButton
        isOpen={isChatOpen}
        onClick={() => setIsChatOpen(!isChatOpen)}
      />

      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        messages={messages}
        input={input}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
