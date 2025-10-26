import { Card } from "@/components/ui/card";
import { Award, Trophy, Star } from "lucide-react";

interface AwardItem {
  title: string;
  organization: string;
  year: string;
  category: "award" | "achievement" | "scholarship";
}

export default function AwardsSection() {
  const awards: AwardItem[] = [
    {
      title: "Best Presentation Award",
      organization: "University of Michigan Research Symposium",
      year: "2025",
      category: "award",
    },
    {
      title: "Outstanding Research Presentation",
      organization: "Biomedical Engineering Conference",
      year: "2024",
      category: "award",
    },
    {
      title: "Graduate Student Excellence Award",
      organization: "Chemical Engineering Department",
      year: "2023",
      category: "award",
    },
    {
      title: "Rank 1 in Chemical Engineering",
      organization: "IIT Kharagpur, Dual Degree Program",
      year: "2021",
      category: "achievement",
    },
    {
      title: "Mitacs Globalink Research Internship",
      organization: "Mitacs Canada",
      year: "2020",
      category: "scholarship",
    },
    {
      title: "S.N. Bose Scholarship",
      organization: "Indo-US Science & Technology Forum",
      year: "2019",
      category: "scholarship",
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "award":
        return Trophy;
      case "achievement":
        return Star;
      case "scholarship":
        return Award;
      default:
        return Award;
    }
  };

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4"
            data-testid="heading-awards"
          >
            Awards & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = getIcon(award.category);
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-shadow duration-300"
                data-testid={`card-award-${index}`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-semibold text-foreground mb-1"
                        data-testid={`text-award-title-${index}`}
                      >
                        {award.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {award.organization}
                      </p>
                      <p
                        className="text-sm text-muted-foreground mt-1"
                        data-testid={`text-award-year-${index}`}
                      >
                        {award.year}
                      </p>
                    </div>
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
