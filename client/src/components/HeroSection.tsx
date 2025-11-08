import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import profileImage from "@assets/generated_images/PhD_student_professional_headshot_9e813628.jpeg";
import bannerImage from "@assets/generated_images/University_of_Michigan_campus_banner_c92f28bb.png";
import umLogo from "@assets/stock_images/university_of_michig_ead0d725.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <img
          src={umLogo}
          alt="University of Michigan"
          className="h-12 md:h-16 w-auto object-contain"
          data-testid="img-university-logo"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1
              className="font-serif text-5xl md:text-6xl font-bold leading-tight"
              data-testid="text-name"
            >
              Abha Kumari
            </h1>
            <p
              className="text-xl md:text-2xl font-medium text-white/90"
              data-testid="text-title"
            >
              PhD Candidate, Chemical Engineering
            </p>
            <p className="text-lg text-white/80" data-testid="text-institution">
              University of Michigan, Ann Arbor
            </p>
            <p className="text-base text-white/70 leading-relaxed max-w-xl">
              Pioneering cancer biomarker isolation through innovative microfluidic 
              device design and advanced characterization of extracellular vesicles 
              for early detection and personalized treatment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("publications")}
                className="bg-white/10 backdrop-blur-md border-white/30 text-white"
                data-testid="button-view-publications"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Publications
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 backdrop-blur-md border-white/30 text-white"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-2xl" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative rounded-xl w-80 h-80 object-cover border-4 border-white/20 shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
