import React from "react";
import AOS from "aos";

import SEO from '../components/seo';
import Header from "../components/Header2";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer2";

function Home() {
  React.useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <SEO
        keywords={[`privo proxy`, `API Gateway`]}
        title="Privo Proxy"
      />
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
