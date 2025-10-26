import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, Cpu, Code } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Microscope;
  skills: string[];
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Experimental Techniques",
      icon: Microscope,
      skills: [
        "Scanning Electron Microscopy (SEM)",
        "Western Blot",
        "qPCR / dPCR",
        "Nanoparticle Tracking Analysis (NTA)",
        "Cell Culture & Maintenance",
        "Immunofluorescence Microscopy",
        "Flow Cytometry",
        "RNA/DNA Extraction",
        "Protein Quantification",
      ],
    },
    {
      title: "Equipment & Instrumentation",
      icon: Cpu,
      skills: [
        "Helios 650 SEM",
        "Ultracentrifuge",
        "ZE5 Cell Analyzer",
        "Rheometer",
        "Nanosight NS300",
        "BioTek Plate Reader",
        "PCR Thermal Cycler",
        "Spectrophotometer",
      ],
    },
    {
      title: "Software & Computational",
      icon: Code,
      skills: [
        "R Programming",
        "COMSOL Multiphysics",
        "ANSYS Fluent",
        "Aspen Plus",
        "MATLAB",
        "SolidWorks",
        "GraphPad Prism",
        "ImageJ / Fiji",
        "FlowJo",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-skills"
          >
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-shadow duration-300"
                data-testid={`card-skill-category-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-foreground"
                      data-testid={`text-category-title-${index}`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
