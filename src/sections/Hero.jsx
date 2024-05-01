import ConnectIcon from "../components/ConnectIcon";
// import coder from "../assets/images/codernol.svg";
// import codeblocks from "../assets/images/codeblocks.svg";
import computer from "../assets/images/computer.svg";

const Hero = () => {
  return (
    <section
      className="min-h-[60vh] bg-deep-background max-container lg:pt-10 pb-20 flex flex-row scroll-mt-32 max-lg:flex-col-reverse"
      id="home"
    >
      <div className="flex flex-col items-start justify-center bg-no-repeat bg-right w-full max-lg:mt-8 lg:w-[50%]">
        <p className="text-complement-color">{"Hello 👋🏽, I'm"}</p>
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
          <button className="mt-5 border rounded-lg border-complement-color text-complement-color font-poppins py-3 px-20 hover:bg-complement-color hover:text-deep-background transition-all ease-in-out duration-300">
            Lets Talk
          </button>
        </a>
        <div className="flex flex-row items-end mt-7 gap-10 flex-wrap">
          <ConnectIcon>
            <i className="ri-github-line" title="Connect on github"></i>
          </ConnectIcon>
          <ConnectIcon>
            <i className="ri-linkedin-fill" title="Connect on linkedin"></i>
          </ConnectIcon>
          <ConnectIcon>
            <i className="ri-twitter-fill" title="Connecct on twitter"></i>
          </ConnectIcon>
          <ConnectIcon>
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
