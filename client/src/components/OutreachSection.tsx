import { Card } from "@/components/ui/card";
import { Heart, Users2 } from "lucide-react";

interface OutreachActivity {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export default function OutreachSection() {
  const activities: OutreachActivity[] = [
    {
      role: "Outreach Committee Member",
      organization: "BIONIC (Biointerfaces Institute), University of Michigan",
      period: "2023 – Present",
      description:
        "Organize educational events and community engagement activities to promote STEM education and research awareness.",
    },
    {
      role: "Active Member",
      organization: "F.E.M.M.E.S. (Females Excelling More in Math, Engineering & Science)",
      period: "2022 – Present",
      description:
        "Participate in mentorship programs and workshops to encourage young women to pursue careers in STEM fields.",
    },
    {
      role: "Symposium Officer",
      organization: "University of Michigan, Chemical Engineering Graduate Society",
      period: "2023 – 2024",
      description:
        "Coordinated research symposia, managed speaker invitations, and facilitated knowledge exchange among graduate students.",
    },
    {
      role: "Outreach Officer",
      organization: "Chemical Engineering Department, University of Michigan",
      period: "2022 – 2023",
      description:
        "Developed outreach initiatives to connect research with broader community impact and public understanding.",
    },
    {
      role: "President",
      organization: "Chemical Engineering Association, IIT Kharagpur",
      period: "2020 – 2021",
      description:
        "Led the departmental student association, organized technical events, industrial visits, and academic workshops.",
    },
  ];

  return (
    <section id="outreach" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-outreach"
          >
            Outreach & Leadership
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-shadow duration-300"
              data-testid={`card-outreach-${index}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {activity.role.includes("President") ||
                    activity.role.includes("Officer") ? (
                      <Users2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Heart className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3
                      className="text-lg font-semibold text-foreground"
                      data-testid={`text-outreach-role-${index}`}
                    >
                      {activity.role}
                    </h3>
                    <p className="text-sm font-medium text-foreground/80">
                      {activity.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activity.period}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {activity.description}
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
