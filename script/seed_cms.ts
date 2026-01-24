
import { storage } from "../api/storage";

async function seed() {
  console.log("Seeding CMS content...");

  const defaults = [
    {
      slug: "site_title_default",
      value: "POPS - Cuidadores de Confiança para Apoio Domiciliário",
      type: "text"
    },
    {
      slug: "site_desc_default",
      value: "Encontre cuidadores de confiança para apoio domiciliário. A POPS liga famílias a profissionais verificados para cuidados personalizados e seguros. Serviços no Grande Porto.",
      type: "text"
    }
  ];

  for (const item of defaults) {
    try {
      await storage.updateCmsContent(item);
      console.log(`Seeded: ${item.slug}`);
    } catch (error) {
      console.error(`Failed to seed ${item.slug}:`, error);
    }
  }

  console.log("Seeding complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed script failed:", err);
  process.exit(1);
});
