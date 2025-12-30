import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import SafeFlexible from "./components/SafeFlexible";
import CaseStudy from "./components/CaseStudy";
import Industries from "./components/Industries";
import Models from "./components/Models";
import DeveloperResources from "./components/DeveloperResources";
import Testimonials from "./components/Testimonials";
import LatestNews from "./components/LatestNews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <SafeFlexible />
        <CaseStudy />
        <Industries />
        <Models />
        <DeveloperResources />
        <Testimonials />
        <LatestNews />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
