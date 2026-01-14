import { Helmet } from 'react-helmet-async';
import { useContent } from '@/hooks/useContent';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  /** Permite esconder páginas específicas do Google (ex: Área de Cliente, Admin) */
  noindex?: boolean; 
}

export default function SEO({ 
  title, 
  description, 
  // Keywords expandidas com base na segmentação do PDF [cite: 161, 284, 298]
  keywords = "apoio domiciliário porto, cuidadores de idosos, enfermagem ao domicílio, fisioterapia geriátrica, cuidados pós-operatórios, acompanhamento hospitalar, alzheimer e demência, cuidados paliativos, babysitting sénior, pops homecare",
  image = "/og-image.jpg",
  url,
  noindex = false
}: SEOProps) {
  const [location] = useLocation();
  // Configuração Base
  const siteUrl = "https://popshomecare.pt";
  const currentUrl = url || `${siteUrl}${location === '/' ? '' : location}`;
  
  // Garante que a imagem é um URL absoluto para o Open Graph (Evita erros no Facebook/WhatsApp)
  const absoluteImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const { value: cmsTitle } = useContent("site_title_default", "POPS - Cuidados Domiciliários de Confiança");
  const { value: cmsDesc } = useContent("site_desc_default", "Plataforma líder em Apoio Domiciliário. Ligamos famílias a cuidadores e enfermeiros verificados. Serviços desde companhia a cuidados clínicos complexos.");

  const finalTitle = title ? `${title} | POPS` : cmsTitle;
  const finalDesc = description || cmsDesc;

  return (
    <Helmet>
      {/* 1. Meta Tags Básicas */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="theme-color" content="#0EA5E9" /> {/* Cor da marca POPS */}

      {/* 2. Robots Control (Importante para páginas privadas) */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      {/* 3. Internacionalização (Hreflang) */}
      {/* Nota: Só usa isto se o conteúdo mudar realmente com ?lang=en. 
          Se for tradução automática client-side, o Google pode ignorar. */}
      <link rel="alternate" href={siteUrl} hrefLang="pt-PT" />
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />

      {/* 4. Open Graph (Facebook/WhatsApp/LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="POPS HomeCare" />

      {/* 5. Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* 6. JSON-LD Schema (O "Segredo" para aparecer bem no Google) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              "url": siteUrl,
              "name": "POPS HomeCare",
              "description": finalDesc,
              "inLanguage": "pt-PT",
              "publisher": { "@id": `${siteUrl}/#organization` }
            },
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              "name": "POPS - Plataforma de Oportunidades para Profissionais de Saúde",
              "url": siteUrl,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`, // Garante que tens um logo.png na root
                "width": 112,
                "height": 112
              },
              "sameAs": [
                "https://www.facebook.com/popshomecare",
                "https://www.instagram.com/popshomecare",
                "https://www.linkedin.com/company/popshomecare"
              ]
            },
            {
              // MUDANÇA CRÍTICA: LocalBusiness -> HomeHealthService
              // Isto diz ao Google exatamente o que fazes.
              "@type": "HomeHealthService", 
              "@id": `${siteUrl}/#localbusiness`,
              "name": "POPS - Apoio Domiciliário",
              "image": absoluteImageUrl,
              "url": siteUrl,
              "telephone": "+351915613345",
              // Preços baseados no PDF: 9€ (Básico) a 45€ (Enfermagem) 
              "priceRange": "9€ - 45€ por hora", 
              "address": {
                "@type": "PostalAddress",
                // Atualizado para PORTO conforme Plano de Negócios 
                "addressLocality": "Porto", 
                "addressRegion": "Porto",
                "addressCountry": "PT"
              },
              // Área de serviço: Começa no Porto, expande para Nacional [cite: 622]
              "areaServed": [
                { "@type": "City", "name": "Porto" },
                { "@type": "City", "name": "Matosinhos" },
                { "@type": "City", "name": "Vila Nova de Gaia" },
                { "@type": "Country", "name": "Portugal" }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                // Coordenadas genéricas do centro do Porto (Atualiza com morada real se tiveres escritório físico)
                "latitude": 41.1579,
                "longitude": -8.6291
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            },
            {
              "@type": "Service",
              "serviceType": "Apoio Domiciliário",
              "provider": { "@id": `${siteUrl}/#organization` },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Planos de Cuidados",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Apoio Básico e Companhia",
                      "description": "Companhia, supervisão e apoio leve para idosos independentes.",
                      "priceSpecification": {
                         "@type": "UnitPriceSpecification",
                         "price": "9.00",
                         "priceCurrency": "EUR",
                         "unitCode": "HUR" // Hora
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cuidados de Enfermagem e Clínicos",
                      "description": "Apoio pós-operatório, gestão de medicação e tratamentos complexos.",
                      "priceSpecification": {
                         "@type": "UnitPriceSpecification",
                         "price": "31.00",
                         "priceCurrency": "EUR",
                         "unitCode": "HUR"
                      }
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