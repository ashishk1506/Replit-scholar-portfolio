import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, ExternalLink } from "lucide-react";
import publication1 from "@assets/generated_images/Microneedle_research_illustration_14f50037.png";
import publication2 from "@assets/generated_images/Chiral_nanoparticles_visualization_2d28b6c1.png";
import publication3 from "@assets/generated_images/PDMS_microsystem_illustration_d476a1b3.png";

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors?: string;
  image: string;
}

export default function PublicationsSection() {
  const publications: Publication[] = [
    {
      title:
        "Stellate Silicon Microneedles for Rapid Point-of-Care Melanoma Exosome Isolation and Detection via a Lateral Flow Assay",
      journal: "Biosensors and Bioelectronics",
      year: "2025",
      image: publication1,
    },
    {
      title:
        "Advanced Microfluidic Platform for Tumor Extracellular Vesicle Isolation",
      journal: "Advanced Materials Technologies",
      year: "2025",
      image: publication3,
    },
    {
      title:
        "Chiroptical Detection and Mutation Analysis of Cancer-Associated Extracellular Vesicles Using Microfluidics with Oriented Chiral Nanoparticles",
      journal: "Matter",
      year: "2024",
      image: publication2,
    },
    {
      title:
        "Novel Approaches in Glioblastoma Biomarker Discovery Through EV Profiling",
      journal: "Nature Communications",
      year: "2025",
      image: publication1,
    },
    {
      title:
        "Porous PDMS-Based Microsystem (ExoSponge) for Rapid Cost-Effective Tumor Extracellular Vesicle Isolation and Mass Spectrometry-Based Metabolic Biomarker Screening",
      journal: "Advanced Materials Technologies",
      year: "2023",
      image: publication3,
    },
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-publications"
          >
            Publications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4">
            Peer-reviewed research in leading scientific journals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 flex flex-col"
              data-testid={`card-publication-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-publication-${index}`}
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3
                  className="text-lg font-semibold text-foreground leading-tight line-clamp-3"
                  data-testid={`text-title-${index}`}
                >
                  {pub.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">
                      {pub.journal}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span
                      className="text-muted-foreground"
                      data-testid={`text-year-${index}`}
                    >
                      {pub.year}
                    </span>
                  </div>
                </div>

                <div className="flex-1" />

                <div className="flex items-center justify-between pt-2">
                  <Badge
                    variant="secondary"
                    className="text-xs"
                    data-testid={`badge-status-${index}`}
                  >
                    Peer Reviewed
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
