import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ProjectImageSlider from "./ProjectImageSlider";

const projects = [
  {
    id: 1,
    title: "PasteHub",
    description:
      "A full-stack paste management platform that allows users to create, edit, update, copy, delete, and share text snippets. Built with React for the frontend and Node.js, Express.js, and MongoDB for the backend with full CRUD functionality.",
    images: [
      "/projects/Landing.jpeg",
      "/projects/PasteHubGoogleAcc.png",
      "/projects/PasteHubHome.png",
    ],
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://youtu.be/oQIQ0nhKYI8",
    githubUrl: "https://github.com/PriyankPhulpagar/PasteHub.git",
  },
  {
    id: 2,
    title: "StudySync",
    description:
      "Built a full-stack learning platform enabling users to register, authenticate, and access a personalized dashboard. Implemented authentication using Passport.js (Local Strategy and Google OAuth) with secure password hashing using bcrypt. Developed backend services using Node.js and Express.js and integrated PostgreSQL for managing user and course data.",
    images: ["/projects/StudySyn.png"],
    tags: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Passport.js"],
    demoUrl: "https://youtu.be/j5qZheJeFLk",
    githubUrl:
      "https://github.com/PriyankPhulpagar/StudySync-Learning.git",
  },
  {
    id: 3,
    title: "JobAI",
    description:
      "An AI-powered interview preparation platform that analyzes resumes and job descriptions using Google Gemini. Generates match scores, technical and behavioral interview questions, skill gaps, preparation roadmaps, and ATS-optimized resumes with downloadable PDF generation.",
    images: [
      "/projects/LoginPageJobAI.png",
      "/projects/JobAI.png",
      "/projects/InterviewReport.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "Gemini AI", "JWT"],
    demoUrl: "https://github.com/PriyankPhulpagar/JobAI",
    githubUrl: "https://github.com/PriyankPhulpagar/JobAI",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project is carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card:hover"
            >
              {/* Project Image Slider */}
              <ProjectImageSlider
                images={project.images}
                title={project.title}
              />

              <div className="p-6">
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} demo`}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/PriyankPhulpagar"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};