import { motion } from "framer-motion";
import imageOne from "../assets/1.jpg";
import imageTwo from "../assets/2.jpg";
import imageThree from "../assets/3a.jpg";
import imageFour from "../assets/4.jpg";
import imageFive from "../assets/5.jpg";
import SocialLinks from "../components/SocialLinks";
import ExperienceSummary from "../components/ExperienceSummary";
import NewsletterSubscribe from "../components/NewsLetterSubscribe";

import SEO from "../components/SEO";

export default function Home() {
  const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

  return (
    <div className="pb-12">
      <SEO
        title="Home | John Garry Tan"
        description="Welcome to the portfolio of John Garry Tan, a Full Stack Developer and UX/UI Designer passionate about building intuitive digital experiences."
      />
      <section
        aria-labelledby="bio-heading"
        className="mt-20 mb-6 md:mt-25 *:my-4"
      >
        <header>
          <h1
            id="bio-heading"
            className="text-xl md:text-5xl font-bold text-foreground md:w-[24ch] text-left md:mr-4"
          >
            Full Stack Developer |{" "}
            <span className="font-medium">UX & UI Designer</span>
          </h1>
        </header>
        <article className="max-w-2xl text-lg leading-relaxed text-muted-foreground *:mb-5 w-[30ch] md:w-[70ch]">
          <p>
            Hello, I’m <strong>John Garry Tan</strong>! I’m a problem solver at
            heart, passionate about building intuitive and impactful digital
            experiences. As a freelance full-stack developer, I focus on
            crafting web solutions—lately, with React.
          </p>
          <p>
            My goal is to design apps that feel effortless for everyone, from
            tech-savvy users to seniors and beginners. I believe accessibility
            goes beyond just the interface—it’s also about building smart,
            efficient back-end logic that ensures a seamless and
            frustration-free experience. Always learning, always
            building—excited for what’s next!
          </p>
        </article>
        <SocialLinks isCol={false} />
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
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
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
        <NewsletterSubscribe />
      </section>
    </div>
  );
}
