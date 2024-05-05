import { useState } from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
// import { defaultbg } from "../assets/images";

const ProjectCard = (props) => {
  const [scrollLock, setScrollLock] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  function toggleScrollLock() {
    setScrollLock((prev) => !prev);
  }

  function imageLoadedHandler() {
    setImageLoaded(true);
  }

  function getLockIcon() {
    return scrollLock ? (
      <CiLock
        className=" fill-vibrant-txt-color ml-[4px] mt-[4px]"
        size={"1.4em"}
      />
    ) : (
      <CiUnlock
        className=" fill-complement-color ml-[4px] mt-[4px]"
        size={"1.4em"}
      />
    );
  }
  return (
    <article className="flex flex-col flex-grow">
      <div className={`w-full md:max-w-lg max-h-[350px]  relative`}>
        <div
          className={`w-full h-[300px] ${
            scrollLock ? "overflow-y-hidden" : "overflow-y-scroll"
          } no-scrollbar bg-defaultbg bg-cover bg-center `}
        >
          <img
            src={props.image}
            alt=""
            className={`w-full ${imageLoaded ? "block" : "hidden"}`}
            onLoad={imageLoadedHandler}
            loading="lazy"
          />
        </div>

        <div
          className="absolute bottom-0 right-0 bg-deep-background w-[50px] h-[50px] rounded-tl-[2rem] flex items-center justify-center cursor-pointer"
          title="Toggle scroll"
          onClick={toggleScrollLock}
        >
          {imageLoaded ? (
            getLockIcon()
          ) : (
            <CgSpinnerAlt
              className=" fill-complement-color ml-[4px] mt-[4px] spinner"
              size={"1.4em"}
              color="#db9864"
            />
          )}
        </div>
      </div>

      <div className="shadow-xl h-full flex flex-col pt-3 pb-8 px-4 md:px-2 md:justify-between">
        <div className="flex flex-col">
          <p className="font-poppins text-complement-color text-sm flex flex-row items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-complement-color"></div>{" "}
            {props.year}
          </p>
          <p className="font-semibold font-manrope text-vibrant-txt-color text-[1.3rem]">
            {props.title}
          </p>
          <p className="font-manrope text-root-txt-color text-sm">
            {props.description}
          </p>

          <div className="mt-7 flex flex-row items-center flex-wrap gap-4">
            {props.technologies.map((tech) => (
              <p key={tech} className="text-root-txt-color font-outfit">
                {tech}{" "}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-row flex-wrap w-full items-center gap-7 self-end justify-self-">
          <a
            href={props.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border-complement-color border font-manrope text-complement-color py-1 px-5 hover:bg-complement-color hover:text-deep-background transition-all ease-in-out duration-300"
          >
            View live
          </a>

          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center font-manrope text-root-txt-color gap-2"
            >
              <RiGithubLine className="fill-root-txt-color" size={"1.2em"} />{" "}
              Github{" "}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
