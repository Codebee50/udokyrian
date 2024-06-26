import ConnectIcon from "../components/ConnectIcon";
import computer from "../assets/images/computer.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="min-h-[80vh] bg-deep-background max-container lg:pt-10  flex flex-row scroll-mt-32 max-lg:flex-col-reverse"
      id="home"
    >
      <div className="flex flex-col items-start justify-center bg-no-repeat bg-right w-full max-lg:mt-8 lg:w-[50%]">
        <div className="flex flex-row gap-[2px]">
          <p className="text-complement-color">Hello</p>
          <motion.span
            animate={{
              rotate: [0, -20, 0, 20, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            👋🏽
          </motion.span>
          <p className="text-complement-color">{", I'm"}</p>
        </div>
        <h1 className="font-poppins font-[700] text-[2.5rem] tiny:text-[3.1rem] phone:text-[3.2rem] text-vibrant-txt-color">
          Onuh Kyrian Udochukwu.
        </h1>
        <h2 className="font-outfit font-[700] text-[1.5rem] tiny:text-[2.1rem] phone:text-[2.5rem] text-root-txt-color">
          Fullstack web developer.
        </h2>
        <p className="mt-2 max-w-3xl w-[90%] text-root-txt-color leading-[1.7] text-[0.9rem] font-poppins">
          {
            "Commanding computers and building systems out of made-up languages."
          }
        </p>

        <a href="#contact">
          <button className="mt-5 border rounded-lg border-complement-color text-complement-color font-poppins py-3 px-20  hover:bg-complement-color  hover:text-deep-background transition-all ease-in-out duration-300">
            Lets Talk
          </button>
        </a>
        <div className="flex flex-row items-end mt-7 gap-10 flex-wrap">
          <ConnectIcon link={"https://github.com/Codebee50"}>
            <i className="ri-github-line" title="Connect on github"></i>
          </ConnectIcon>
          <ConnectIcon link={"https://www.linkedin.com/in/udochukwu-onuh-9035a4232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            <i className="ri-linkedin-fill" title="Connect on linkedin"></i>
          </ConnectIcon>
          <ConnectIcon link={"https://twitter.com/OnuhUdo"}>
            <i className="ri-twitter-fill" title="Connecct on twitter"></i>
          </ConnectIcon>
          <ConnectIcon link={"https://wa.me/+2349128168542"}>
            <i className="ri-whatsapp-line" title="Connecct on whatsapp"></i>
          </ConnectIcon>
        </div>
      </div>

      <div className="w-[50%] flex max-lg:w-full ">
        <img
          src={computer}
          alt="Codebee codes"
          width={300}
          className="flex-shrink-0 m-auto w-[90%] sm:w-[60%]  lg:w-[90%]"
        />
      </div>
    </section>
  );
};

export default Hero;
