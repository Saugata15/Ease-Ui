import AboutCTA from "./about/AboutCTA";
import AboutFeatures from "./about/AboutFeatures";
import AboutHero from "./about/AboutHero";
import AboutMission from "./about/AboutMission";
import AboutTechnology from "./about/AboutTechnology";


const AboutPage = () => {
  return (
    <main className="min-h-screen bg-(--bg-color) text-(--text-color)">
      <AboutHero />

      <AboutMission />

      <AboutFeatures />

      <AboutTechnology />

      <AboutCTA />
    </main>
  );
};

export default AboutPage;