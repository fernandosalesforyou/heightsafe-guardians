import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Types } from "@/components/site/Types";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { ProjectPhase } from "@/components/site/ProjectPhase";
import { Installation } from "@/components/site/Installation";
import { Special } from "@/components/site/Special";
import { ProjectVideos, InspectionVideos } from "@/components/site/VideoBlock";
import { Inspections, Anchors, NR35 } from "@/components/site/Inspections";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Linha de Vida para Telhado no RS | Projeto e Instalação | Engenhar+" },
      { name: "description", content: "Projeto, instalação e inspeção de linha de vida para telhado. Soluções seguras para trabalho em altura, adequação à NR-35 e prevenção de acidentes." },
      { property: "og:title", content: "Linha de Vida para Telhado no RS | Projeto e Instalação | Engenhar+" },
      { property: "og:description", content: "Projeto, instalação e inspeção de linha de vida para telhado. Soluções seguras para trabalho em altura, adequação à NR-35 e prevenção de acidentes." },
      { name: "twitter:title", content: "Linha de Vida para Telhado no RS | Projeto e Instalação | Engenhar+" },
      { name: "twitter:description", content: "Projeto, instalação e inspeção de linha de vida para telhado. Soluções seguras para trabalho em altura, adequação à NR-35 e prevenção de acidentes." },
    ],
  }),
});

function Index() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Types />
        <Services />
        <HowWeWork />
        <ProjectPhase />
        <Installation />
        <Special />
        <ProjectVideos />
        <Inspections />
        <InspectionVideos />
        <Anchors />
        <NR35 />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}
