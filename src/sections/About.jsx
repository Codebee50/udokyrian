import udopic from "../assets/images/udo-picmod.png";
// import me from "../assets/images/melarge.png";
import HeadingText from "../components/HeadingText";
import Square from "../components/Square";
import Technology from "../components/Technology";
import { technologies } from "../constants";
import kyrian from '../assets/images/kyrian.jpg'

function About() {
  return (
    <section
      className="bg-deep-background w-[90%] max-w-[1100px] flex flex-col scroll-mt-28"
      id="about"
    >
      <div className="w-full">
        <HeadingText label="About me" className="mt-10 sm:mt-20" />

        <h2 className="font-poppins font-bold text-xl sm:text-2xl text-root-txt-color">
          Relentless problem solver.
        </h2>

        <div className="w-full flex flex-col gap-5 lg:flex-row items-start mt-8">
          <img
            src={udopic}
            width={300}
            height={300}
            className="object-cover object-center rounded-md"
            alt="Picture of Onuh Kyrian Udochukwu"
          />

          <div>
            <article className="max-w-[750px] text-root-txt-color leading-[2] font-poppins font-medium text-[0.9rem]">
              Yup thats me {":)"}, my name is{" "}
              <span className="text-complement-color">Kyrian</span>, porpularly
              known as Codebee as regards to my love for the work ethic of bees.
              I enjoy creating peculiar web applications designed with problem
              solving in mind. I am a{" "}
              <span className="text-complement-color">full-stack</span> web
              developer.
              <br /> With over{" "}
              <span className="text-complement-color">2 years</span> coding
              experience, I command a formidable skill set enabling me craft,
              manage and implement reliable, secure and scalable architectures
              for the backend and responsive, user-friendly websites for the
              frontend.
            </article>

            <br />
            <p className="max-w-[600px] text-root-txt-color leading-[1.8] font-poppins text-[0.9rem]">
              I am adept at collaborating with cross-functional teams to deliver
              exceptional web applications.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex flex-row items-center">
          <Square></Square>
          <p className="font-semibold ml-2 text-root-txt-color font-poppins">
            Technologies and tools within my scope of expertise include:
          </p>
        </div>

        <div className="mt-6 grid max-sm:grid-auto-fill sm:flex justify-between flex-row gap-10 flex-wrap">
          {technologies.map((tech) => (
            <Technology key={tech.label} item={tech}></Technology>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
