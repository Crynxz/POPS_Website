import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/useContent';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "apoio domiciliário, serviços ao domicílio, cuidadores idosos, enfermagem domicílio, auxiliares geriatria, cuidados paliativos, descanso do cuidador, pops portugal, lisboa, porto",
  image = "/og-image.jpg",
  url = "https://popshomecare.vercel.app"
}: SEOProps) {
  const { value: cmsTitle } = useContent("site_title_default", "POPS - Apoio Domiciliário e Cuidadores de Idosos Verificados");
  const { value: cmsDesc } = useContent("site_desc_default", "Encontre os melhores serviços de apoio domiciliário em Portugal. A POPS conecta famílias a cuidadores de idosos verificados e profissionais de saúde com total segurança e transparência.");

  const finalTitle = title || cmsTitle;
  const finalDesc = description || cmsDesc;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Hreflang for SEO Internationalization */}
      <link rel="alternate" href={url} hrefLang="pt-PT" />
      <link rel="alternate" href={`${url}?lang=en`} hrefLang="en-US" />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDesc} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Schema Markup: LocalBusiness + Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "name": "POPS - Apoio Domiciliário",
              "image": "https://popshomecare.vercel.app/og-image.jpg",
              "@id": "https://popshomecare.vercel.app",
              "url": "https://popshomecare.vercel.app",
              "telephone": "+351915613345",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lisboa",
                "addressLocality": "Lisboa",
                "addressRegion": "Lisboa",
                "postalCode": "1000",
                "addressCountry": "PT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.7223,
                "longitude": -9.1393
              },
              "description": finalDesc,
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/pops",
                "https://www.instagram.com/pops",
                "https://www.linkedin.com/company/pops"
              ]
            },
            {
              "@type": "Service",
              "serviceType": "Apoio Domiciliário",
              "provider": { "@id": "https://popshomecare.vercel.app" },
              "areaServed": {
                "@type": "Country",
                "name": "Portugal"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Cuidado",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Apoio Sénior e Geriatria"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Enfermagem e Cuidados de Saúde"
                    }
                  }
                ]
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}