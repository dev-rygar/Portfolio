import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { workExperiences } from "../data/data";

export default function ExperienceSummary() {
  // Get the most recent work experience
  const latestExperience = workExperiences[0];

  return (
    <div className="relative group w-full max-w-xl md:max-w-[30vw] mb-6">

      <div className="relative h-full bg-card rounded-3xl border border-border/50 p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-sm cursor-default">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground">Professional Journey</h3>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Latest Role</span>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">{latestExperience.title}</h4>
            <ul className="space-y-2">
              {latestExperience.mainBullets.slice(0, 2).map((bullet, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  <span className="line-clamp-2">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-4 border-t border-border/50">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
          >
            View Full Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
