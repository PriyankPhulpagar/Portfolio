import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PasteHub",
    description:
      "A full-stack paste management platform that allows users to create, edit, update, copy, delete, and share text snippets. Built with React for the frontend and Node.js, Express.js, and MongoDB for the backend with full CRUD functionality.",
    image: "/projects/Landing.jpeg",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://youtu.be/oQIQ0nhKYI8",
    githubUrl: "https://github.com/PriyankPhulpagar/PasteHub.git",
  },
  {
    id: 2,
    title: "StudySync",
    description:
      "Built a full-stack learning platform enabling users to register, authenticate, and access a personalized dashboard. Implemented authentication using Passport.js (Local Strategy and Google OAuth) with secure password hashing using bcrypt. Developed backend services using Node.js and Express.js and integrated PostgreSQL for managing user and course data.",
    image: "/projects/StudySyn.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "EJS", "Passport.js"],
    demoUrl: "https://youtu.be/j5qZheJeFLk",
    githubUrl: "https://github.com/PriyankPhulpagar/StudySync-Learning.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.Each project is carefully crafted
          with attention to detail, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card:hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
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

        <div className="text-center mt-12">
            <a href="https://github.com/PriyankPhulpagar" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>

      </div>
    </section>
  );
};
