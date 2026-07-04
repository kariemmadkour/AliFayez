import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import PartySection from "@/components/sections/PartySection";
import FayezSection from "@/components/sections/FayezSection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import GallerySection from "@/components/gallery/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <MarqueeStrip />
        <PartySection />
        <FayezSection />
        <InitiativesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
