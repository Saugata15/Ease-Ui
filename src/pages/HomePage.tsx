import ComponentShowcase from "./home/ComponentShowcase";
import CTASection from "./home/CTASection";
import DeveloperExperience from "./home/DeveloperExperience";
import FeaturesSection from "./home/FeaturesSection";
import HeroSection from "./home/HeroSection";


const HomePage = () => {
  return (
    <main className="min-h-screen text-(--text-color)">
      <HeroSection />
      <FeaturesSection />
      <ComponentShowcase />
      <DeveloperExperience />
      <CTASection />
    </main>
  );
};

export default HomePage;