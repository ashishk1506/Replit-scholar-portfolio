import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

interface ExperienceItem {
  institution: string;
  role: string;
  duration: string;
  location: string;
  description: string;
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      institution: "University of Waterloo",
      role: "Summer Internship",
      duration: "May 2020 – Aug 2020",
      location: "India",
      description:
        "Study of Transport Phenomena using Finite Element Analysis Modeling.",
    },
    {
      institution: "Purdue University",
      role: "Undergraduate Intern, Mechanical Engineering Department",
      duration: "May 2019 – Jul 2019",
      location: "USA",
      description:
        "Analysis of Flow and Transport Phenomena in Energy Systems.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-experience"
          >
            Research Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-shadow duration-300"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3
                      className="text-xl font-semibold text-foreground"
                      data-testid={`text-institution-${index}`}
                    >
                      {exp.institution}
                    </h3>
                    <p className="text-base font-medium text-foreground/80">
                      {exp.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span data-testid={`text-duration-${index}`}>
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p
                    className="text-sm text-foreground/70 leading-relaxed"
                    data-testid={`text-description-${index}`}
                  >
                    {exp.description}
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
