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
  // Keywords alinhadas com plano de negócios:
  // - Foco em idosos, dependência, cuidados domiciliários
  // - Grande Porto como primeira fase geográfica
  // - Termos relacionados com culpa filial, segurança, verificação
  keywords = "apoio domiciliário porto, cuidadores de idosos porto, cuidados domiciliários matosinhos, cuidados ao domicílio gaia, ajuda a idosos, cuidados pós-alta hospitalar, apoio ao idoso dependente, cuidadores verificados, plataforma cuidados domiciliários, marketplace cuidadores, segurança cuidados em casa, cuidadores certificados portugal, apoio familiar idosos, pops homecare",
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

  // Títulos e descrições alinhadas com proposta de valor do plano
  const { value: cmsTitle } = useContent(
    "site_title_default",
    "POPS - Cuidadores de Confiança para Apoio Domiciliário"
  );

  const { value: cmsDesc } = useContent(
    "site_desc_default",
    "Encontre cuidadores de confiança para apoio domiciliário. A POPS liga famílias a profissionais verificados para cuidados personalizados e seguros. Serviços no Grande Porto."
  );

  const finalTitle = title ? `${title} | POPS` : cmsTitle;
  const finalDesc = description || cmsDesc;

  // JSON-LD Schema - Organization + LocalBusiness
  // Alinhado com marketplace descentralizado: POPS oferece plataforma, não emprega diretamente
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "POPS - Plataforma de Cuidados Domiciliários",
    description: "Marketplace de cuidadores domiciliários verificados. Conectamos famílias a profissionais qualificados de apoio domiciliário.",
    url: siteUrl,
    logo: `${siteUrl}/LogoIconTransparentBG.png`,
    image: absoluteImageUrl,
    telephone: "+351213911596",
    email: "hello@popshomecare.pt",
    // Foco geográfico inicial: Grande Porto
    areaServed: [
      {
        "@type": "City",
        name: "Porto",
        sameAs: "https://en.wikipedia.org/wiki/Porto"
      },
      {
        "@type": "City",
        name: "Matosinhos",
        sameAs: "https://en.wikipedia.org/wiki/Matosinhos"
      },
      {
        "@type": "City",
        name: "Vila Nova de Gaia",
        sameAs: "https://en.wikipedia.org/wiki/Vila_Nova_de_Gaia"
      },
      {
        "@type": "City",
        name: "Maia",
        sameAs: "https://en.wikipedia.org/wiki/Maia,_Portugal"
      }
    ],
    priceRange: "€€",
    // Destaque de verificação e segurança - core da proposta de valor
    sameAs: [
      "https://www.instagram.com/popshomecare",
      "https://www.linkedin.com/company/pops-homecare"
    ],
    // Serviços oferecidos (Corrigido para usar makesOffer -> Offer -> Service)
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Companhia e Apoio Leve no Domicílio",
          description: "Serviço de companhia, supervisão e apoio em tarefas domésticas leves para idosos e pessoas em situação de dependência.",
          url: `${siteUrl}/servicos/basico`
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Higiene, Mobilidade e Cuidados Domésticos",
          description: "Apoio em higiene pessoal, mobilidade assistida e cuidados domésticos para pessoas com dependência moderada.",
          url: `${siteUrl}/servicos/completo`
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apoio a Demências e Casos de Alta Dependência",
          description: "Cuidados especializados para demências, Alzheimer e situações de alta complexidade funcional. Requer profissionais certificados e verificados.",
          url: `${siteUrl}/servicos/especializado`
        }
      }
    ]
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'pt-PT',
        'xml:lang': 'pt-PT'
      }}
    >
      {/* 1. Meta Tags Básicas */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="content-language" content="pt-PT" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#0E6973" />
      <meta name="author" content="POPS - Cuidados Domiciliários" />
      <meta name="language" content="pt-PT" />
      <meta property="og:locale" content="pt_PT" />

      {/* 2. Robots Control (Importante para páginas privadas) */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* 3. Canonical (Evita conteúdo duplicado) */}
      <link rel="canonical" href={currentUrl} />

      {/* 4. Internacionalização (Hreflang) - Só ativar se houver versions reais em outras línguas */}
      <link rel="alternate" hrefLang="pt-PT" href={siteUrl} />

      {/* 5. Open Graph (Facebook/WhatsApp/LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="POPS - Cuidados Domiciliários" />

      {/* 6. Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:creator" content="@popshomecare" />

      {/* 7. Apple / Mobile */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="POPS" />

      {/* 8. Preconect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* 9. JSON-LD Schema (Estrutura de dados para Google, crítica para SEO) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>

      {/* 10. Breadcrumb Schema (para navegação clara no Google) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl
            },
            location !== "/" ? {
              "@type": "ListItem",
              position: 2,
              name: title || "Página",
              item: currentUrl
            } : null
          ].filter(Boolean)
        })}
      </script>

      {/* 11. Trust Signals - Verification & Security */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="email=no" />
    </Helmet>
  );
}