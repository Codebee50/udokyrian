import InputLabel from "../components/InputLabel";
// import manoncall from "../assets/images/manoncall.svg";
// import manoncallnobg from '../assets/images/manoncallnobg.svg'
import ContactFlatCard from "../components/ContactFlatCard";
import { RiMailLine, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { message } from "antd";

const ContactSection = () => {
  const nameInputRef = useRef();
  const epInputRef = useRef();
  const messageInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  function sendEmail({
    toEmail,
    toName,
    senderName = "Kyrian.pro",
    senderEmail = "onuhudoudo@gmail.com", //default values
    subject = "Test",
    htmlContent,
    onSuccess = () => {},
    onError = () => {},
    onFinished = () => {},
  }) {
    if (!toEmail || !toName || !htmlContent) return;

    fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": `${import.meta.env.VITE_SEND_IN_BLUE_API}`,
        "content-type": "application/json",
        "X-Sib-Sandbox": "drop",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
        headers: {
          "X-Mailin-custom":
            "custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3",
          charset: "iso-8859-1",
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          onError();
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error))
      .finally(onFinished);
  }

  function generateRandomString() {
    return Math.random().toString(36).slice(2);
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    setLoading(true);
    messageApi.open({
      key: key,
      type: "loading",
      content: "Reaching out to codebee...",
    });

    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;
    const contact = epInputRef.current.value;

    const htmlContent = `
    <html>
    <head></head>
    <body style="padding: 30px;">
        <br>
        <h1>New Chat from Kyrian.pro</h1>
        <br><br>
  
        <p><b>Name: </b> ${name}</p> <br>
        <p><b>Contact info: </b> ${contact}</p> <br>
        <p><b>Message:</b> ${message}</p> <br>
        <br>
    </body>
    </html>
    `;

    sendEmail({
      toEmail: "onuhudoudo@gmail.com",
      toName: "Onuh Kyrian Udochukwu",
      subject: `New chat from kyrian.pro ~id:${generateRandomString()}`, //generating a random string so that email subjects can remeain unique
      htmlContent: htmlContent,
      onFinished: () => {
        setLoading(false);
      },
      onSuccess: () => {
        messageApi.open({
          key: key,
          type: "success",
          content: "Thank you for your message. I will be in touch shortly.",
          duration: 4,
        });
      },
      onError: () => {
        messageApi.open({
          key: key,
          type: "error",
          content: "Error sending message :( please try again",
          duration: 7,
        });
      },
    });
  }

  return (
    <section
      className="w-[90%] min-h-screen max-w-[1100px]  flex flex-col sm:flex-row justify-between items-stretch gap-7 sm:gap-[70px] md:gap-[70px] pt-10 scroll-mt-[50px]"
      id="contact"
    >
      {contextHolder}
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
        <form
          action=""
          className="flex flex-col gap-7"
          onSubmit={formSubmitHandler}
        >
          <InputLabel
            type="text"
            label="Your name"
            id="name"
            ref={nameInputRef}
          />
          <InputLabel
            type="text"
            label="Phone or email"
            id="phoneoremail"
            ref={epInputRef}
          />

          <InputLabel
            type="textarea"
            label="Your message"
            id="name"
            ref={messageInputRef}
          />

          <button
            type="submit"
            value="Submit"
            disabled={loading}
            className="disabled:bg-dim-root-txt-color disabled:opacity-40 disabled:border-root-txt-color w-full md:w-[90%] max-w-[400px] mt-5 border rounded-lg border-complement-color text-complement-color font-poppins py-3 px-20 hover:bg-complement-color hover:text-deep-background transition-all ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
