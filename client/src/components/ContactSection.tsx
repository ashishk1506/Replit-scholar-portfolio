import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

export default function ContactSection() {
  const handleContactClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-contact"
          >
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-lg text-foreground/70 leading-relaxed">
            I'm always open to discussing research collaborations, academic
            opportunities, or innovative projects in biomedical engineering and
            cancer diagnostics.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              onClick={() => handleContactClick("Email")}
              data-testid="button-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleContactClick("LinkedIn")}
              data-testid="button-linkedin"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">
              Research Profiles
            </p>
            <div className="flex justify-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactClick("Google Scholar")}
                data-testid="button-google-scholar"
              >
                <SiGooglescholar className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactClick("ResearchGate")}
                data-testid="button-researchgate"
              >
                <SiResearchgate className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContactClick("University Page")}
                data-testid="button-university"
              >
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
