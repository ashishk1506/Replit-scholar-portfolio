import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import ProfessionalExperienceSection from "@/components/ProfessionalExperienceSection";
import InternshipSection from "@/components/InternshipSection";
import PublicationsSection from "@/components/PublicationsSection";
import PatentsSection from "@/components/PatentsSection";
import AwardsSection from "@/components/AwardsSection";
import TeachingSection from "@/components/TeachingSection";
import OutreachSection from "@/components/OutreachSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EducationSection />
      <ProfessionalExperienceSection />
      <InternshipSection />
      <PublicationsSection />
      <PatentsSection />
      <AwardsSection />
      <TeachingSection />
      <OutreachSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
