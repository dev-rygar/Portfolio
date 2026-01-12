import { techStackSections } from "../data/data";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import SEO from "../components/SEO";
import { ExternalLink, Github, FolderGit2, Layers, Code2, Database, Layout, PenTool, Shield, Wrench } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Projects() {
  const projects = [
    {
      title: "Mint Supply Company",
      category: "E-Commerce Platform",
      description:
        "A high-performance B2B distribution platform. Features scalable inventory management, advanced SEO architecture, and seamless product integration.",
      tags: ["Next.js", "React", "Supabase", "TailwindCSS"],
      link: "https://mintsupplycompany.com",
      linkText: "Visit Live Site",
      github: "",
      featured: true,
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "hover:border-emerald-500/50",
    },
    {
      title: "Marketplace API",
      category: "Backend Architecture",
      description:
        "Robust RESTful API supporting a multi-vendor marketplace. Implements JWT authentication, complex product CRUD ops, and secure order processing.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/dev-rygar/Marketplace",
      github: "https://github.com/dev-rygar/Marketplace",
      gradient: "from-blue-500/20 to-indigo-500/20",
      border: "hover:border-blue-500/50",
    },
    {
      title: "Marketplace UI",
      category: "Frontend Application",
      description:
        "Responsive consumer interface for the marketplace ecosystem. Focuses on intuitive UX, component reusability, and state management.",
      tags: ["React", "Vite", "Tailwind", "Axios"],
      link: "https://marketplace-garry-wheat.vercel.app/",
      github: "https://github.com/dev-rygar/Marketplace",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "hover:border-purple-500/50",
    },
    {
      title: "Owtentik",
      category: "UI/UX Prototype",
      description:
        "High-fidelity mobile app prototype. Demonstrates a user-centric Agile design process, from wireframing to interactive prototyping.",
      tags: ["Figma", "Prototyping", "Design System"],
      link: "https://www.figma.com/design/s0POc9jM6zZXp62X8qJU5V/Awtentik%2FOwtentik-App?node-id=0-1&t=bydz8MM30kwcJbvG-1",
      linkText: "View Prototype",
      github: "",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "hover:border-orange-500/50",
    },
    {
      title: "DevSoftPh Assessment",
      category: "Technical Assessment",
      description: "Code challenge submission demonstrating clean architecture, rapid development, and best practices in React.",
      tags: ["React", "Vite", "Clean Code"],
      link: "https://softdev-six.vercel.app/",
      github: "",
      gradient: "from-gray-500/20 to-slate-500/20",
      border: "hover:border-slate-500/50",
    },
  ];

  const getTechIcon = (index: number) => {
    const icons = [Code2, Layout, Database, Shield, Wrench, Layers, PenTool, FolderGit2];
    const Icon = icons[index % icons.length];
    return <Icon className="h-5 w-5 mb-2 text-primary" />;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-6 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <SEO
        title="Projects | John Garry Tan"
        description="A curated showcase of high-impact web development projects and technical skills."
      />

      {/* Hero Header */}
      <motion.div variants={itemVariants} className="mb-24 space-y-6">
        <div className="flex items-center gap-3 text-primary font-medium tracking-wide text-sm uppercase">
          <span className="w-8 h-[2px] bg-primary"></span>
          Project Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
          Turning complex problems into <br className="hidden md:block" />
          <span className="text-primary">
            elegant solutions.
          </span>
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
          My work spans full-stack applications, scalable backend systems, and intuitive user interfaces. Each project represents a unique challenge solved with modern code.
        </p>
      </motion.div>

      {/* Featured Project Showcase (Bento Grid) */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 auto-rows-[minmax(300px,auto)]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`
              relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between
              bg-card border border-border/50 transition-all duration-300
              ${project.featured ? "md:col-span-2 lg:col-span-2 min-h-[400px]" : "col-span-1"}
              ${project.border} hover:shadow-2xl hover:shadow-primary/5
            `}
          >
            {/* Gradient Background Blob */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${project.gradient} blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="bg-background/50 backdrop-blur-md border-primary/20 text-primary px-3 py-1">
                  {project.category}
                </Badge>
                {project.featured && (
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                )}
              </div>

              <h3 className={`font-bold mb-3 text-foreground ${project.featured ? "text-4xl" : "text-2xl"}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                {project.link && (
                  <Button asChild className="rounded-full font-semibold shadow-lg shadow-primary/20">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {project.linkText || "View Project"} <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button asChild variant="ghost" className="rounded-full hover:bg-muted font-medium">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Arsenal Section */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-3 mb-12">
          <Layers className="text-primary h-8 w-8" />
          <h2 className="text-3xl font-bold text-foreground">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStackSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {getTechIcon(index)}
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-4 text-foreground">{section.title}</h3>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item, i) => (
                  // Splitting combined items if they exist as comma-separated
                  item.split(',').map((subItem, subI) => (
                    <span key={`${i}-${subI}`} className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {subItem.trim()}
                    </span>
                  ))
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
