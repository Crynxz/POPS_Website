import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "POPS - Rede de Cuidados Domiciliários Verificados", 
  description = "Conectamos famílias a cuidadores qualificados e verificados. Segurança, transparência e tecnologia para o cuidado domiciliário em Portugal.", 
  keywords = "apoio domiciliário, cuidadores, idosos, saúde, enfermagem, lar, pops, portugal",
  image = "/og-image.jpg",
  url = "https://pops.pt"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "POPS - Cuidados Domiciliários Verificados",
          "image": "https://popshomecare.vercel.app/og-image.jpg",
          "@id": "https://popshomecare.vercel.app",
          "url": "https://popshomecare.vercel.app",
          "telephone": "+351912345678",
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
          "description": description,
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/pops",
            "https://www.instagram.com/pops",
            "https://www.linkedin.com/company/pops"
          ]
        })}
      </script>
    </Helmet>
  );
}