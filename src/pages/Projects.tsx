import { techStackSections } from "../data/data";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import SEO from "../components/SEO";

export default function TechStack() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SEO
        title="Projects | John Garry Tan"
        description="Discover the technological expertise and project showcase of John Garry Tan."
      />
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Technological Expertise Across Diverse Domains
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A Comprehensive Tech Arsenal Powering Innovation and Creativity
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {techStackSections.map((section, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl border-gray-200"
            >
              <CardHeader className="flex flex-row items-center space-y-0 gap-4 pb-2">
                <div className="bg-cyan-100 text-primary p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {index % 6 === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    )}
                    {index % 6 === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    )}
                    {index % 6 === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    )}
                    {index % 6 === 3 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M13 5.5a4 4 0 00-4 4v6a4 4 0 004 4v0"
                      />
                    )}
                    {index % 6 === 4 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    )}
                    {index % 6 === 5 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    )}
                  </svg>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <svg
                        className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex-grow">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Project Showcase
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mb-6">
            This section is intended to showcase my latest projects. However,
            due to time constraints, I’m currently featuring two of my older &
            recent projects that are published on Vercel.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "DevSoftPh",
                description: "Specifically for DevSoftPh Interview",
                link: "https://softdev-six.vercel.app/",
                github: "",
              },
              {
                title: "Backend: Marketplace",
                description:
                  "A secure, scalable backend built with Node.js, Express, and MongoDB.",
                link: "https://github.com/dev-rygar/Marketplace",
                github: "https://github.com/dev-rygar/Marketplace",
              },
              {
                title: "Marketplace",
                description:
                  "This is where I have used the backend: Marketplace, I haven't maintend this and it requires the account details I have made to use.",
                link: "https://marketplace-garry-wheat.vercel.app/",
                github: "https://github.com/dev-rygar/Marketplace",
              },
              {
                title: "Owtentik",
                description:
                  "UX/UI Design Project of mine that showcase similar process with AGILE DEVELOPMENT.",
                link: "https://www.figma.com/design/s0POc9jM6zZXp62X8qJU5V/Awtentik%2FOwtentik-App?node-id=0-1&t=bydz8MM30kwcJbvG-1",
                github:
                  "https://www.figma.com/design/s0POc9jM6zZXp62X8qJU5V/Awtentik%2FOwtentik-App?node-id=0-1&t=bydz8MM30kwcJbvG-1",
              },
              // Add more projects as needed
            ].map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-200"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
                <CardFooter className="flex space-x-4">
                  {project.link && (
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-accent"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
