import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Features />
        <Solutions />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
