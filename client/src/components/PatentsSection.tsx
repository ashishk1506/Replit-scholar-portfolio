import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, ExternalLink } from "lucide-react";

interface Patent {
  title: string;
  number: string;
  year: string;
  status: string;
  description: string;
  link: string;
}

export default function PatentsSection() {
  const patents: Patent[] = [
    {
      title:
        "A Novel Immuno-affinity Based Microfluidic Device (MGM ExoChip) for Specific Capture of Extracellular Vesicles from Plasma of Meningioma Patients",
      number: "US App. No. 63/754225",
      year: "2025",
      status: "Provisional Patent",
      description:
        "Innovative microfluidic platform designed for selective isolation of meningioma-derived extracellular vesicles using immunoaffinity-based capture technology.",
      link: "https://available-inventions.umich.edu/product/meningioma-exochip"
    },
  ];

  const handleInstitutionClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };


  return (
    <section id="patents" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-patents"
          >
            Patents
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {patents.map((patent, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-shadow duration-300 group cursor-pointer"
              data-testid={`card-patent-${index}`}
              onClick={() => handleInstitutionClick(patent.link)}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant="default" data-testid={`badge-status-${index}`}>
                        {patent.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {patent.number}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({patent.year})
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 ml-auto group-hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInstitutionClick(patent.link);
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <h3
                      className="text-xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors"
                      data-testid={`text-patent-title-${index}`}
                    >
                      {patent.title}
                    </h3>
                  </div>

                  <p className="text-base text-foreground/70 leading-relaxed">
                    {patent.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
