import SocialLinks from "../components/SocialLinks";
import profileImage from "../assets/profile.jpeg";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { User, Code2, Heart, Mail } from "lucide-react";

// Animation Variants (Consistent with Projects/Career)
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

export default function About() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen px-6 py-24 md:py-32 max-w-6xl mx-auto"
    >
      <SEO
        title="About | John Garry Tan"
        description="Learn more about John Garry Tan, his background, hobbies, and passion for technology and design."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN: Profile & Key Info */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <motion.div variants={itemVariants} className="relative group">
            {/* Image Frame with Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-zinc-500/40 to-zinc-200/40 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
              <img
                src={profileImage}
                alt="John Garry Tan"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-card border border-border/50 rounded-2xl p-6  shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-primary">
              <Mail className="h-5 w-5" />
              <h3 className="font-semibold text-foreground">Get in Touch</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Open for collaborations, freelance projects, or just a friendly tech chat.
            </p>
            <a
              href="mailto:johngarry.tan@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-colors"
            >
              johngarry.tan@gmail.com
            </a>
            <div className="mt-6 flex justify-center">
              <SocialLinks isCol={false} />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Biography & Content */}
        <div className="space-y-12">
          {/* Hero Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 text-primary font-medium tracking-wide text-sm uppercase">
              <span className="w-8 h-[2px] bg-primary"></span>
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Innovating from Antipolo City, <br />
              <span className="text-primary">crafting the future today.</span>
            </h1>
          </motion.div>

          {/* Intro Quote Card */}
          <motion.div variants={itemVariants} className="relative p-8 rounded-3xl bg-primary/5 border border-primary/10">

            <p className="relative z-10 text-lg md:text-xl font-medium text-foreground italic leading-relaxed">
              "I prioritize problem-solving and strategic thinking over focusing solely on a specific tech stack. Tackling a problem starts with understanding the task at hand."
            </p>
          </motion.div>

          {/* Biography Sections */}
          <motion.div variants={itemVariants} className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-semibold text-xl">
                <Code2 className="h-6 w-6 text-primary" />
                <h2>The Holistic Approach</h2>
              </div>
              <p>
                This mindset, rooted in my background in Computer Science and Information Technology, highlights the importance of logical thinking, flowcharts, and user-centric design. I believe these principles are key to building successful applications. I approach software development from a holistic perspective—considering the bigger picture, integrating agile methodologies, and collaborating with cross-functional teams to drive results.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-semibold text-xl">
                <User className="h-6 w-6 text-primary" />
                <h2>Adaptability & Growth</h2>
              </div>
              <p>
                Over the years, I’ve adapted to the needs of each project, leveraging my knowledge to develop thoughtful, well-rounded solutions. Whether leading teams or managing complex projects, I’m always eager to learn and grow.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground font-semibold text-xl">
                <Heart className="h-6 w-6 text-primary" />
                <h2>Looking Forward</h2>
              </div>
              <p>
                As I continue on my journey, I am excited to contribute to dynamic teams and shape innovative solutions that focus on both process and technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
