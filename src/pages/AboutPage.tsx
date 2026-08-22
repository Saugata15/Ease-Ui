import {
  aboutFeatures,
  technologies,
  designPrinciples,
  aboutComponents,
} from "../pages/about/aboutData";
import AboutComponents from "./about/AboutComponents";
import AboutCreator from "./about/AboutCreator";
import AboutCTA from "./about/AboutCTA";
import AboutFeatures from "./about/AboutFeatures";
import AboutHero from "./about/AboutHero";
import AboutPhilosophy from "./about/AboutPhilosophy";
import AboutTechStack from "./about/AboutTechStack";

const AboutPage = () => {
  return (
    <div
      className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16
        lg:px-10 lg:py-20 xl:px-12 space-y-12 sm:space-y-14 lg:space-y-20 text-(--text-color)"
    >
      {/* Hero */}
      <AboutHero />

      {/* Why Ease UI */}
      <AboutFeatures features={aboutFeatures} />

      {/* Built With */}
      <AboutTechStack technologies={technologies} />

      {/* Design Philosophy */}
      <AboutPhilosophy principles={designPrinciples} />

      {/* Component Library */}
      <AboutComponents components={aboutComponents} />

      {/* Creator & Mentor */}
      <AboutCreator />

      {/* CTA */}
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
