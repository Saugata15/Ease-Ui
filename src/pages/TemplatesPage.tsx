import TemplateGrid from "./templates/TemplateGrid";
import TemplatesCTA from "./templates/TemplatesCTA";
import TemplatesHero from "./templates/TemplatesHero";


const TemplatesPage = () => {
  return (
    <main className="min-h-screen bg-(--bg-color) text-(--text-color)">
      <TemplatesHero />

      <TemplateGrid />

      <TemplatesCTA />
    </main>
  );
};

export default TemplatesPage;