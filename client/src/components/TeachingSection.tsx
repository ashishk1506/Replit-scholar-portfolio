import { Card } from "@/components/ui/card";
import { GraduationCap, Users } from "lucide-react";

interface TeachingRole {
  role: string;
  course?: string;
  institution: string;
  period: string;
  description: string;
}

export default function TeachingSection() {
  const teaching: TeachingRole[] = [
    {
      role: "Graduate Student Instructor",
      course: "ChE 460: Process Dynamics and Control",
      institution: "University of Michigan",
      period: "Fall 2024",
      description:
        "Led recitation sessions, held office hours, and developed course materials for undergraduate chemical engineering students.",
    },
    {
      role: "Peer Mentor",
      institution: "University of Michigan, Chemical Engineering Department",
      period: "2022 – 2023",
      description:
        "Mentored incoming graduate students on research methodology, laboratory techniques, and academic development.",
    },
    {
      role: "Teaching Assistant",
      course: "Process Engineering & Heat Transfer",
      institution: "Indian Institute of Technology, Kharagpur",
      period: "2020",
      description:
        "Assisted in laboratory sessions, graded assignments, and provided tutorial support for undergraduate courses.",
    },
  ];

  return (
    <section id="teaching" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-teaching"
          >
            Teaching & Mentoring
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teaching.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-shadow duration-300"
              data-testid={`card-teaching-${index}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {item.role.includes("Mentor") ? (
                      <Users className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3
                      className="text-lg font-semibold text-foreground"
                      data-testid={`text-teaching-role-${index}`}
                    >
                      {item.role}
                    </h3>
                    {item.course && (
                      <p className="text-sm font-medium text-foreground/80">
                        {item.course}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.institution} • {item.period}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
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
