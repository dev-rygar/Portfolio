import SocialLinks from "../components/SocialLinks";
import profileImage from "../assets/profile.jpeg";

export default function About() {
  return (
    <div className="container mx-auto mt-16 sm:mt-32 px-6 pb-12 ">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={profileImage}
              alt="Portrait"
              className="aspect-square rotate-3 rounded-2xl bg-gray-200 object-cover"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 md:text-5xl w-[16ch]">
            I’m John Garry Tan. Innovating from Antipolo City, crafting the
            future today.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600">
            <p>
              As a Full-Stack Web Developer, I prioritize problem-solving and
              strategic thinking over focusing solely on a specific tech stack
              or programming language. While understanding a tech stack is
              essential, I view it as just one tool among many. Tackling a
              problem, for me, starts with understanding the task at hand,
              identifying the right people to collaborate with, and figuring out
              the best approach. It's like planning a construction
              project—gathering the necessary resources and planning the steps,
              rather than relying on just one tool.
            </p>
            <p>
              This mindset, rooted in my background in Computer Science and
              Information Technology, highlights the importance of logical
              thinking, flowcharts, and user-centric design. These principles, I
              believe, are key to building successful applications and managing
              projects effectively. I’ve learned to approach software
              development from a holistic perspective, considering the bigger
              picture—integrating agile methodologies and working with
              cross-functional teams to drive results.
            </p>
            <p>
              Over the years, I’ve adapted to the needs of each project,
              leveraging my knowledge to develop thoughtful, well-rounded
              solutions. I’ve worked in diverse environments, from leading teams
              to managing complex projects, and I’m always eager to learn and
              grow.
            </p>
            <p>
              As I continue on my journey, I am excited to contribute to dynamic
              teams and shape innovative solutions that focus on both process
              and technology.
            </p>
          </div>
        </div>

        <div className="lg:pl-20 text-gray-900">
          <SocialLinks isCol={true} />
          <a
            href="mailto:johngarry.tan@gmail.com"
            className="mt-8 border-t border-gray-300 pt-8 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            johngarry.tan@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
