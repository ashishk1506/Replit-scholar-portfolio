import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

interface InternshipItem {
  title: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
}

export default function InternshipSection() {
  const internships: InternshipItem[] = [
    {
      title: "Finite Element Analysis of Cells",
      institution: "University of Waterloo",
      duration: "May 2020 – Aug 2020",
      location: "Remote (India)",
      description:
        "Study of Transport Phenomena using Finite Element Analysis Modeling. Developed computational models to analyze cellular mechanics and transport processes using advanced simulation techniques.",
    },
    {
      title: "Metal Anode Deposition Modeling",
      institution: "Purdue University, Mechanical Engineering Department",
      duration: "May 2019 – Jul 2019",
      location: "USA",
      description:
        "Analysis of Flow and Transport Phenomena in Energy Systems. Investigated electrochemical deposition processes and energy storage mechanisms through computational fluid dynamics.",
    },
  ];

  return (
    <section id="internships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-internships"
          >
            Internship Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-shadow duration-300"
              data-testid={`card-internship-${index}`}
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
                      data-testid={`text-internship-title-${index}`}
                    >
                      {internship.title}
                    </h3>
                    <p className="text-base font-medium text-foreground/80">
                      {internship.institution}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span data-testid={`text-duration-${index}`}>
                      {internship.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {internship.location}
                    </span>
                  </div>

                  <p
                    className="text-sm text-foreground/70 leading-relaxed"
                    data-testid={`text-description-${index}`}
                  >
                    {internship.description}
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
