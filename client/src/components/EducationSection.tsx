import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

import umichImage from "@assets/stock_images/university_of_michig_ead0d725.png";
import iitkgpImage from "@assets/stock_images/iitkgp.png";
import chinmayaImage from "@assets/stock_images/Chinmaya_Vidyalaya_logo.png";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  grade?: string;
  skills?: string[];
  activities?: string[];
  image: string;
  link: string;
}

export default function EducationSection() {
  const education: EducationItem[] = [
    {
      institution: "University of Michigan, Ann Arbor",
      degree: "PhD",
      field: "Chemical Engineering",
      duration: "2021 – Present",
      grade: "4.0/4.0",
      image: umichImage,
      link: "https://che.engin.umich.edu/",
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
      degree: "M.Tech + B.Tech (Hons.)",
      field: "Chemical Engineering",
      duration: "2016 – 2021",
      grade: "9.63/10",
      image: iitkgpImage,
      link: "https://www.iitkgp.ac.in/department/CH",
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
      image: chinmayaImage,
      link: "https://cvbokaro.in/",
    },
  ];

  const handleInstitutionClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

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
              className="p-8 hover-elevate transition-shadow duration-300 group cursor-pointer"
              onClick={() => handleInstitutionClick(edu.link)}
              data-testid={`card-education-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-testid={`img-institution-${index}`}
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors"
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
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0 group-hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInstitutionClick(edu.link);
                      }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span
                        className="text-sm font-medium text-foreground"
                        data-testid={`text-grade-${index}`}
                      >
                        GPA: {edu.grade}
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
