import ProjectCard from "../components/ProjectCard";
import { projectList } from "../constants";

const Projects = () => {
  return (
    <section
      className="bg-deep-background min-h-screen w-[90%] max-w-[1100px] flex flex-col items-center scroll-mt-28 mt-20"
      id="projects"
    >
      {/* <div className="flex flex-row items-center gap-4 w-full justify-center mt-10">
          <div className="w-[50%] max-w-[200px] h-[1px] bg-root-txt-color"></div>
          <p className="font-poppins font-bold text-3xl transition-all ease-in-out hover:text-complement-color duration-300 text-vibrant-txt-color">Projects</p>
          <div className="w-[50%] max-w-[200px] h-[1px] bg-root-txt-color"></div>
      </div>

      <p className="text-dim-root-txt-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m gap-10 items-start mt-20">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
