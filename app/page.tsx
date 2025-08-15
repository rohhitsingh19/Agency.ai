import ContentSection from "@/components/content-3";
import Features from "@/components/features-3";
import HeroSection from "@/components/hero-section";
import FAQsThree from "@/components/faqs-3";
import IntegrationsSection from "@/components/integrations-8";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <Features/>
    <ContentSection/>
    <IntegrationsSection/>
    <FAQsThree/>
    <FooterSection/>
    </div>
  );
}
