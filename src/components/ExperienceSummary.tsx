import { workExperiences } from "../data/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ExperienceSummary() {
  // Get the most recent work experience
  const latestExperience = workExperiences[0];

  return (
    <Card className="max-w-xl md:max-w-[25vw] mb-6 shadow-lg rounded-xl border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-xl font-bold text-foreground">
          Professional Journey
        </CardTitle>
        <span className="text-primary font-medium text-sm">Latest Role</span>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-foreground">
            {latestExperience.title}
          </h3>
        </div>

        <ul className="text-muted-foreground text-sm space-y-2 list-disc pl-5">
          {latestExperience.mainBullets.slice(0, 2).map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>

        <div className="border-t pt-4 flex justify-between items-center">
          <p className="text-muted-foreground text-xs">
            Press <span className="font-semibold">Experience</span> in the
            navbar to see full details
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
