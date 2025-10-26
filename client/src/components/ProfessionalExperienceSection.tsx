import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical } from "lucide-react";

interface ResearchProject {
  title: string;
  collaborators: string[];
  institution: string;
  description: string;
  highlights: string[];
}

export default function ProfessionalExperienceSection() {
  const projects: ResearchProject[] = [
    {
      title: "Longitudinal Profiling of Glioblastoma Extracellular Vesicles",
      collaborators: ["Prof. Sunitha Nagrath", "Dr. Adam Sonabend"],
      institution: "University of Michigan & Northwestern University",
      description:
        "Developed and optimized a novel microfluidic device for capturing glioblastoma-derived extracellular vesicles from patient plasma samples.",
      highlights: [
        "Optimized microfluidic device design and fabrication protocols",
        "Pending patent application for innovative EV capture technology",
        "Enabled longitudinal monitoring of glioblastoma biomarkers",
      ],
    },
    {
      title: "Selective Microfluidic Capture of Meningioma Extracellular Vesicles",
      collaborators: ["Prof. Sunitha Nagrath", "Dr. Mark Youngblood"],
      institution: "University of Michigan",
      description:
        "Engineered immunoaffinity-based microfluidic platform for specific isolation of meningioma EVs from patient plasma.",
      highlights: [
        "Developed RNA extraction and purification workflows",
        "Performed dPCR and qPCR for biomarker validation",
        "Conducted western blot analysis for protein characterization",
      ],
    },
    {
      title: "Study of Neutrophil–Glioblastoma EV Interactions",
      collaborators: ["Prof. Sunitha Nagrath", "Prof. Deepak Nagrath"],
      institution: "University of Michigan",
      description:
        "Investigated the biological interactions between neutrophils and glioblastoma-derived extracellular vesicles.",
      highlights: [
        "In-vitro characterization of neutrophil functional responses",
        "Ex-vivo validation using patient-derived samples",
        "Multi-parametric flow cytometry and imaging analysis",
      ],
    },
  ];

  return (
    <section id="professional-experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-professional-experience"
          >
            Professional Research Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-shadow duration-300"
              data-testid={`card-project-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FlaskConical className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3
                      className="text-2xl font-semibold text-foreground mb-2"
                      data-testid={`text-project-title-${index}`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {project.institution}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.collaborators.map((collab, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-collaborator-${index}-${idx}`}
                        >
                          {collab}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-base text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Key Contributions:
                    </p>
                    <ul className="space-y-1 border-l-2 border-primary/30 pl-4">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/70"
                          data-testid={`text-highlight-${index}-${idx}`}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
