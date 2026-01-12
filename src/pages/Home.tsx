import { motion } from "framer-motion";
import imageOne from "../assets/1.jpg";
import imageTwo from "../assets/2.jpg";
import imageThree from "../assets/3a.jpg";
import imageFour from "../assets/4.jpg";
import imageFive from "../assets/5.jpg";
import SocialLinks from "../components/SocialLinks";
import ExperienceSummary from "../components/ExperienceSummary";
import WorkWithMe from "../components/WorkWithMe";

import SEO from "../components/SEO";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

  return (
    <PageTransition className="pb-12">
      <SEO
        title="Home | John Garry Tan"
        description="Welcome to the portfolio of John Garry Tan, a Full Stack Developer and UX/UI Designer passionate about building intuitive digital experiences."
      />
      <section
        aria-labelledby="bio-heading"
        className="mt-20 mb-6 md:mt-25 *:my-4 flex flex-col items-center text-center"
      >
        <header>
          <motion.h1
            id="bio-heading"
            className="text-4xl md:text-6xl font-bold text-foreground overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {["Full", "Stack", "Developer", "|"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-2 md:mr-4"
                variants={{
                  hidden: { y: "100%" },
                  visible: {
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="font-medium text-muted-foreground inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, duration: 0.5 },
                },
              }}
            >
              UX & UI Designer
            </motion.span>
          </motion.h1>
        </header>
        <article className="max-w-2xl text-lg leading-relaxed text-muted-foreground *:mb-5">
          <p>
            Hello, I’m <strong>John Garry Tan</strong>! I’m a problem solver at
            heart, passionate about building intuitive and impactful digital
            experiences. As a freelance full-stack developer, I focus on
            crafting web solutions lately, with React.
          </p>
          <p>
            My goal is to design apps that feel effortless for everyone, from
            tech-savvy users to seniors and beginners. I believe accessibility
            goes beyond just the interface it’s also about building smart,
            efficient back-end logic that ensures a seamless and
            frustration-free experience. Always learning, always
            building excited for what’s next!
          </p>
        </article>
        <div className="flex justify-center w-full">
          <SocialLinks isCol={false} />
        </div>
      </section>

      <section className="text-center mt-4 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          A Peek Into My World
        </h2>
        <p className="text-muted-foreground mt-2">
          Here are some things that inspire me, my hobbies, and what I love!
        </p>
      </section>
      <div className="flex gap-4 overflow-x-auto snap-x scroll-smooth px-4 py-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 10,
            }}
            className="
        snap-center 
        flex-shrink-0 
        w-64 
        h-80 
        bg-muted 
        rounded-lg 
        shadow-lg 
        overflow-hidden 
        relative
      "
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
      <section className="mt-12 pb-6 flex flex-col md:flex-row justify-start items-start w-full *:mx-4">
        <ExperienceSummary />
        <WorkWithMe />
      </section>
    </PageTransition>
  );
}
