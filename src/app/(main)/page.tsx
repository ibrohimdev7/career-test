import AboutSection from "@/containers/home/about";
import ContactSection from "@/containers/home/contact";
import FAQSection from "@/containers/home/faq";
import FeaturesSection from "@/containers/home/features";
import HeroSection from "@/containers/home/hero";
import HowItWorksSection from "@/containers/home/how-it-works";
import MembersSection from "@/containers/home/members";
import PricingSection from "@/containers/home/pricing";
import ResultSection from "@/containers/home/results";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ResultSection />
      <MembersSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Home;
