import ProjectCard from "../components/ProjectCard";
import { projectList } from "../constants";
import HeadingText from "../components/HeadingText";

const Projects = () => {
  return (
    <section
      className="bg-deep-background min-h-screen w-[90%] max-w-[1100px] flex flex-col items-center scroll-mt-28 mt-32 pb-[10vh]"
      id="projects"
    >
      <HeadingText label="Projects"/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 items-stretch justify-center mt-5">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
