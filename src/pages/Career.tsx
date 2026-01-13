import { useState } from "react";
import { workExperiences, WorkExperience } from "../data/data";
import { educationItems, certificationItems } from "../data/data";
import CertificateGallery from "../components/CertificateGallery";
import { CertificateItem } from "../data/certificateConfig";
import { Button } from "../components/ui/button";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calendar,
  GraduationCap,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Animation Variants (Consistent with Projects.tsx)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Career() {
  const [expandedExperiences, setExpandedExperiences] = useState<{
    [key: number]: boolean;
  }>({});

  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  const [showAllHistory, setShowAllHistory] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedExperiences((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-6 py-24 md:py-32 max-w-5xl mx-auto"
    >
      <SEO
        title="Experience | John Garry Tan"
        description="Explore John Garry Tan's professional journey, work experience, education, and certifications."
      />

      {/* 1. HERO SECTION (Aligned with Projects.tsx) */}
      <motion.div variants={itemVariants} className="mb-24 space-y-6">
        <div className="flex items-center gap-3 text-primary font-medium tracking-wide text-sm uppercase">
          <span className="w-8 h-[2px] bg-primary"></span>
          Professional Journey
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-4xl leading-tight">
          Crafting code, driving innovation, & <br className="hidden md:block" />
          <span className="text-primary">
            shaping solutions.
          </span>
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
          A timeline of my professional growth, key contributions, and the milestones that define my career path.
        </p>
      </motion.div>

      {/* 2. WORK EXPERIENCE (Bento/Premium Cards) */}
      <motion.div variants={itemVariants} className="mb-24">
        <div className="flex items-center gap-3 mb-12">
          {/* <Briefcase className="text-primary h-8 w-8" /> */}
          <h2 className="text-3xl font-bold text-foreground">Work History</h2>
        </div>

        <div className="flex flex-col gap-8">
          {workExperiences
            .slice(0, showAllHistory ? undefined : 2)
            .map((experience: WorkExperience, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative overflow-hidden rounded-3xl p-8 bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group"
              >
                {/* Subtle Gradient Blob */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-8">
                  {/* Left Column: Role Info */}
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {experience.title}
                      </h3>
                      {/* Assuming company name is embedded in title or we add a field later. using Generic for now if not in data, but title seems to have it usually */}
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{experience.period}</span>
                      </div>
                      {/* Placeholder for location if available in future data */}
                      {/* <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Manila, PH</span>
                             </div> */}
                    </div>
                  </div>

                  {/* Right Column: Achievements */}
                  <div className="space-y-6">
                    <ul className="space-y-3">
                      {experience.mainBullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                          <span className="text-base leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Collapsible Section */}
                    <AnimatePresence>
                      {expandedExperiences[index] && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="space-y-3 overflow-hidden"
                        >
                          {experience.additionalBullets.map((bullet, bulletIndex) => (
                            <li key={`additional-${bulletIndex}`} className="text-muted-foreground">
                              <span className="text-sm leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {experience.additionalBullets.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-2 pl-0"
                      >
                        {expandedExperiences[index] ? (
                          <>Show Less <ChevronUp className="h-4 w-4" /></>
                        ) : (
                          <>View Full Details <ChevronDown className="h-4 w-4" /></>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {workExperiences.length > 2 && (
          <motion.div variants={itemVariants} className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowAllHistory(!showAllHistory)}
              className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
            >
              {showAllHistory ? "Show Less History" : "View Older Roles"}
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* 3. EDUCATION & CERTIFICATIONS (Grid System) */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {/* Education */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-4">
            {educationItems.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{item.text}</h3>
                {item.prefix && <p className="text-sm text-muted-foreground">{item.prefix}</p>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications List */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
          </div>
          <div className="space-y-4">
            {certificationItems.map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 4. CERTIFICATE GALLERY */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-8 justify-center">
          <h2 className="text-2xl font-bold text-foreground text-center">Certificate Gallery</h2>
        </div>
        <CertificateGallery
          selectedCertificate={selectedCertificate}
          setSelectedCertificate={setSelectedCertificate}
        />
      </motion.div>

    </motion.div>
  );
}
