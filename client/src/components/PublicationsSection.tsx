import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen } from "lucide-react";
import publication1 from "@assets/generated_images/Microneedle_research_illustration_14f50037.png";
import publication2 from "@assets/generated_images/Chiral_nanoparticles_visualization_2d28b6c1.png";
import publication3 from "@assets/generated_images/PDMS_microsystem_illustration_d476a1b3.png";

interface Publication {
  title: string;
  journal: string;
  date: string;
  summary: string;
  image: string;
}

export default function PublicationsSection() {
  const publications: Publication[] = [
    {
      title:
        "Stellate Silicon Microneedles for Rapid Point-of-Care Melanoma Exosome Isolation and Detection via a Lateral Flow Assay",
      journal: "Biosensors and Bioelectronics",
      date: "May 16, 2025",
      summary:
        "This work explores at-home melanoma detection using microneedle patches and lateral flow assay technology.",
      image: publication1,
    },
    {
      title:
        "Chiroptical detection and mutation analysis of cancer-associated extracellular vesicles using microfluidics with oriented chiral nanoparticles",
      journal: "Matter",
      date: "Dec 4, 2024",
      summary:
        "This study uses chiral nanoparticles to identify mutations in cancer exosomes through enhanced chiral signals.",
      image: publication2,
    },
    {
      title:
        "Porous PDMS-Based Microsystem (ExoSponge) for Rapid Cost-Effective Tumor Extracellular Vesicle Isolation and Mass Spectrometry-Based Metabolic Biomarker Screening",
      journal: "Advanced Materials Technologies",
      date: "Jan 29, 2023",
      summary:
        "A simple PDMS-based microsystem for high-throughput isolation of tumor-derived exosomes.",
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
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

              <div className="p-6 space-y-4">
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
                      data-testid={`text-date-${index}`}
                    >
                      {pub.date}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm text-foreground/70 leading-relaxed"
                  data-testid={`text-summary-${index}`}
                >
                  {pub.summary}
                </p>

                <Badge
                  variant="secondary"
                  className="text-xs"
                  data-testid={`badge-status-${index}`}
                >
                  Peer Reviewed
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
