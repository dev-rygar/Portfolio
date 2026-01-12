import { useState } from "react";
import { workExperiences, WorkExperience } from "../data/data";
import { educationItems, certificationItems } from "../data/data";
import SectionList from "../components/SectionList";
import CertificateGallery from "../components/CertificateGallery";
import { CertificateItem } from "../data/certificateConfig"; // Import from certificateConfig
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";

export default function Career() {
  const [expandedExperiences, setExpandedExperiences] = useState<{
    [key: number]: boolean;
  }>({});

  // State for certificate modal
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <PageTransition className="mx-auto mt-16 pb-12 flex flex-col px-4">
      <SEO
        title="Experience | John Garry Tan"
        description="Explore John Garry Tan's professional journey, work experience, education, and certifications."
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl md:w-[25ch]">
          Crafting code, driving innovation, and shaping solutions across
          industries.
        </h1>
        <h2 className="mt-4 text-muted-foreground text-xs md:text-sm ">
          Work History - We listen and we don't judge
        </h2>
        <section className="mt-10 px-4 flex flex-col w-full space-y-8">
          {workExperiences.map((experience: WorkExperience, index: number) => (
            <Card key={index} className="shadow-sm border-l-4 border-l-primary/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl md:text-2xl font-semibold">
                  {experience.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-6 text-sm md:text-md text-muted-foreground space-y-2">
                  {experience.mainBullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                  {expandedExperiences[index] &&
                    experience.additionalBullets.map((bullet, bulletIndex) => (
                      <li key={`additional-${bulletIndex}`}>{bullet}</li>
                    ))}
                </ul>
                {experience.additionalBullets.length > 0 && (
                  <Button
                    variant="ghost"
                    onClick={() => toggleExpand(index)}
                    className="text-primary hover:text-primary/80 hover:bg-transparent p-0 h-auto font-medium"
                  >
                    {expandedExperiences[index] ? "Show Less" : "Read More"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        <SectionList title="Education" items={educationItems} />
        <SectionList title="Certification" items={certificationItems} />
        <CertificateGallery
          selectedCertificate={selectedCertificate}
          setSelectedCertificate={setSelectedCertificate}
        />
      </div>
    </PageTransition>
  );
}
