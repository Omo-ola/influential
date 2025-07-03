import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>
        Influential Catering Services | Agro-Catering & Farm Management Experts
      </title>
      <meta
        name="description"
        content="We offer mobile catering for weddings, housewarmings, and business events, plus expert agricultural services like fish farming, poultry, and general farm management."
      />
      <link rel="canonical" href="https://www.agro-cateringservice.com.ng/" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.agro-cateringservice.com.ng/"
      />
      <meta
        property="og:title"
        content="Influential Catering Services | Agro-Catering & Farm Management Experts"
      />
      <meta
        property="og:description"
        content="Professional agro-catering and farm services for weddings, housewarmings, ceremonies, and agricultural ventures."
      />
      <meta
        property="og:image"
        content="https://www.agro-cateringservice.com.ng/og-banner.png"
      />

      {/* Twitter Card */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://yourdomain.com" />
      <meta
        name="twitter:title"
        content="Influential Catering Services | Agro-Catering & Farm Management Experts"
      /> */}
      {/* <meta
        name="twitter:description"
        content="Mobile catering and agricultural management services across Nigeria. We bring hospitality and agriculture together!"
      />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/images/og-banner.jpg"
      /> */}
    </Helmet>
  );
};

export default SEO;
