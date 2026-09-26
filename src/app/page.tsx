import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <StorySection />
          <MenuSection />
          <ExperienceSection />
          <FeatureSection />
          <GallerySection />
          <LocationSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
