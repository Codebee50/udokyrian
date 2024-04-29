import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";

const ProjectCard = (props) => {
    const [scrollLock, setScrollLock] = useState(true)

    function toggleScrollLock(){
        setScrollLock((prev)=>!prev)
    }
  return (
    <article className="flex flex-col">
      <div className={`w-full md:max-w-lg max-h-[350px]  relative`}>
        <div className={`w-full h-[350px] ${scrollLock?'overflow-y-hidden': 'overflow-y-scroll'} no-scrollbar`}>
         <img src={props.image} alt="" className="w-full" />

        </div>

        {/* <div className="w-full h-full absolute top-0 z-10 bg-gradient-to-t from-deep-background via-transparent flex flex-col justify-end p-5">
       
        </div> */}

        <div className="absolute bottom-0 right-0 bg-deep-background w-[50px] h-[50px] rounded-tl-[2rem] flex items-center justify-center cursor-pointer" title="Toggle scroll" onClick={toggleScrollLock}>
            {
                scrollLock? <CiLock className=" fill-vibrant-txt-color ml-[4px] mt-[4px]" size={'1.4em'}/>:  <CiUnlock className=" fill-vibrant-txt-color ml-[4px] mt-[4px]" size={'1.4em'}/>

            }
        </div>
      </div>

      <div className="shadow-xl flex flex-col pt-3 pb-8 px-4 md:px-2">
        <p className="font-poppins text-complement-color text-sm flex flex-row items-center gap-2"><div className="w-2 h-2 rounded-full bg-complement-color"></div> {props.year}</p>
        <p className="font-semibold font-manrope text-vibrant-txt-color text-[1.3rem]">{props.title}</p>
        <p className="font-manrope text-root-txt-color text-sm">{props.description}</p>

        <div className="mt-7 flex flex-row items-cen flex-wrap gap-4">
            {
                props.technologies.map((tech)=>(
                    <p key={tech} className="text-root-txt-color font-outfit">{tech} </p>
                ))
            }
        </div>

        
      <div className="mt-5 flex flex-row flex-wrap w-full items-center gap-7">
            <a href={props.live} target="_blank" rel="noopener noreferrer" className="border-complement-color border font-manrope text-complement-color py-1 px-5 hover:bg-complement-color hover:text-deep-background transition-all ease-in-out duration-300">
                View live
            </a>

            {
                props.github && <a href={props.github} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center font-manrope text-root-txt-color gap-2"><RiGithubLine className="fill-root-txt-color" size={'1.2em'}/> Github </a>
            }
      </div>
      </div>

    </article>
  );
};

export default ProjectCard;
