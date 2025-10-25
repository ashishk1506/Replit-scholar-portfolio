import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  grade?: string;
  skills?: string[];
  activities?: string[];
}

export default function EducationSection() {
  const education: EducationItem[] = [
    {
      institution: "University of Michigan",
      degree: "PhD",
      field: "Chemical Engineering",
      duration: "Aug 2021 – Jul 2026",
      skills: [
        "Western Blot",
        "dPCR",
        "qPCR",
        "Immunofluorescence",
        "SEM",
        "AutoCAD",
        "Adobe Illustrator",
      ],
    },
    {
      institution: "Indian Institute of Technology, Kharagpur",
      degree: "MTech and BTech Dual Degree",
      field: "Chemical Engineering",
      duration: "2016 – 2021",
      grade: "9.63/10",
      activities: [
        "General Secretary, Social and Cultural (SoCult), SN Hall of Residence",
        "Vice President, Chemical Engineering Association",
        "Treasurer, Chemical Engineering Association",
        "Fine & Arts Secretary, SN Hall of Residence",
      ],
    },
    {
      institution: "Chinmaya Vidyalaya, Bokaro Steel City",
      degree: "Intermediate",
      field: "Mathematics",
      duration: "2014 – 2016",
      grade: "9.44/10",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-education"
          >
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-shadow duration-300"
              data-testid={`card-education-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3
                      className="text-2xl font-semibold text-foreground mb-1"
                      data-testid={`text-institution-${index}`}
                    >
                      {edu.institution}
                    </h3>
                    <p className="text-lg font-medium text-foreground/80">
                      {edu.degree} • {edu.field}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.duration}
                    </p>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span
                        className="text-sm font-medium text-foreground"
                        data-testid={`text-grade-${index}`}
                      >
                        Grade: {edu.grade}
                      </span>
                    </div>
                  )}

                  {edu.skills && edu.skills.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Technical Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs font-mono"
                            data-testid={`badge-skill-${index}-${idx}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.activities && edu.activities.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Leadership & Activities:
                      </p>
                      <ul className="space-y-1 border-l-2 border-primary/30 pl-4">
                        {edu.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-foreground/70"
                            data-testid={`text-activity-${index}-${idx}`}
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
