import InputLabel from "../components/InputLabel";
// import manoncall from "../assets/images/manoncall.svg";
// import manoncallnobg from '../assets/images/manoncallnobg.svg'
import ContactFlatCard from "../components/ContactFlatCard";
import { RiMailLine, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";

const ContactSection = () => {
  return (
    <section
      className="w-[90%] min-h-screen max-w-[1100px]  flex flex-col sm:flex-row justify-between items-stretch gap-7 sm:gap-[70px] md:gap-[70px] pt-10 scroll-mt-[50px]"
      id="contact"
    >
      <div className="flex flex-col w-full sm:w-[50%] h-full">
        <p className="font-manrope font-medium text-complement-color">
          Get In Touch
        </p>
        <h2 className="text-2xl text-vibrant-txt-color font-poppins">
          Lets chat, reach out to me.
        </h2>
        <p className="text-[0.8rem] text-dim-root-txt-color font-manrope max-w-[400px]">
          {
            "Whether you have a job proposition to discuss or simply want to say hello, feel free to reach out to me. I'll be delighted to get back to you as soon as possible."
          }
        </p>

        {/* <img src={manoncall} alt="" className="w-[90%] max-w-[300px] max-sm:hidden"/> */}

        <div className="flex flex-col rounded-xl w-full h-full mt-5">
          <ContactFlatCard
            icon={RiMailLine}
            label="Email"
            value="onuhudoudo@gmail.com"
            href="mailto:onuhudoudo@gmail.com"
          />
          <ContactFlatCard
            icon={RiPhoneLine}
            label="Phone"
            value="+234 9128 168 542"
            href="tel:+2349128168542"
          />
          <ContactFlatCard
            icon={RiWhatsappLine}
            label="Whatsapp"
            value="+234 9128 168 542"
            href="https://wa.me/+2349128168542"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-xl w-full sm:w-[50%]">
        <form action="" className="flex flex-col gap-7">
          <InputLabel type="text" label="Your name" id="name" />
          <InputLabel type="text" label="Phone or email" id="phoneoremail" />

          <InputLabel type="textarea" label="Your name" id="name" />

          <input
            type="submit"
            value="Submit"
            className="w-full md:w-[90%] max-w-[400px] mt-5 border rounded-lg border-complement-color text-complement-color font-poppins py-3 px-20 hover:bg-complement-color hover:text-deep-background transition-all ease-in-out duration-300"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
