import { useState } from "react";
import { workExperiences, WorkExperience } from "../data";
import { educationItems, certificationItems } from "../data";
import SectionList from "./SectionList";
import CertificateGallery from "./CertificateGallery";
import { CertificateItem } from "../certificateConfig"; // Import from certificateConfig

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
    <div className="mx-auto mt-16 pb-12 flex flex-col px-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 md:text-5xl md:w-[25ch]">
          Crafting code, driving innovation, and shaping solutions across
          industries.
        </h1>
        <h2 className="mt-4 text-gray-400 text-xs md:text-sm ">
          Work History - We listen and we don't judge
        </h2>
        <section className="mt-10 px-4 flex flex-col w-full space-y-8">
          {workExperiences.map((experience: WorkExperience, index: number) => (
            <article
              key={index}
              className="space-y-4 border-l-2 border-gray-200 pl-4"
            >
              <section className="space-y-1">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {experience.title}
                </h2>
                
              </section>
              <ul className="list-disc pl-6 text-sm md:text-md text-gray-600 space-y-2">
                {experience.mainBullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
                {expandedExperiences[index] &&
                  experience.additionalBullets.map((bullet, bulletIndex) => (
                    <li key={`additional-${bulletIndex}`}>{bullet}</li>
                  ))}
              </ul>
              {experience.additionalBullets.length > 0 && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300 text-sm mt-2 font-medium"
                >
                  {expandedExperiences[index] ? "Show Less" : "Read More"}
                </button>
              )}
            </article>
          ))}
        </section>

        <SectionList title="Education" items={educationItems} />
        <SectionList title="Certification" items={certificationItems} />
        <CertificateGallery
          selectedCertificate={selectedCertificate}
          setSelectedCertificate={setSelectedCertificate}
        />
      </div>
    </div>
  );
}
