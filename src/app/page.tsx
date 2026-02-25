import { HeroSection } from "@/components/home/HeroSection";
import { TechMarquee } from "@/components/home/TechMarquee";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { StatsCounter } from "@/components/home/StatsCounter";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TechMarquee />
      <FeaturedProjects />
      <StatsCounter />
      <CTASection />
    </div>
  );
}
