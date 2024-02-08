import { motion } from "framer-motion";
import ContactPages from "./Design/ContactPages";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    content: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, content } = formData;
    const mailtoLink = `mailto:drp9975@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nmessage: \n${content}`)}`;
    window.location.href = mailtoLink;
  };
  return (
    <footer id="contact" className="container">
      <div className="my-5">
        <h1
          className="text-3xl md:text-4xl"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Contact Me
        </h1>
        <hr
          className="border-t-[2px] border-accent w-1/4"
          data-aos="flip-left"
        />
      </div>
      <div className="flex flex-wrap md:py-16">
        <div className="flex flex-col justify-start items-start md:justify-center md:items-center w-full lg:w-5/12">
          <h2 className="text-white text-xl md:text-3xl ">
            <motion.span
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Let&apos;s Chat.
            </motion.span>
            <br />
            <span
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              Tell me about your
            </span>
            <br />{" "}
            <span
              className="text-text"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-delay="150"
              data-aos-duration="1500"
            >
              Project.
            </span>
          </h2>
          <ContactPages />
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-4">
          <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
            <h2
              className="text-xl lg:text-3xl text-white py-3"
              data-aos="fade-down"
              data-aos-delay="2000"
              data-aos-duration="1000"
            >
              Drop your creativity
            </h2>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div
                className="w-full lg:w-1/2 px-2 mb-4"
                data-aos="fade-down"
                data-aos-delay="2200"
                data-aos-duration="1000"
              >
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-white bg-background leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div
                className="w-full lg:w-1/2 px-2 mb-4"
                data-aos="fade-down"
                data-aos-delay="2400"
                data-aos-duration="1000"
              >
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-white bg-background leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-white bg-background leading-tight focus:outline-none focus:shadow-outline mb-4 "
              style={{ maxHeight: "8rem", minHeight: "4rem" }}
              id="message"
              name="message"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              placeholder="Your project details..."
              rows="5"
              required
              data-aos="fade-down"
              data-aos-delay="2600"
              data-aos-duration="1000"
            ></textarea>
            <button
              className="border-2 border-text hover:border-white text-white text-xl py-2 px-5 rounded-md focus:shadow-outline"
              type="submit"
              data-aos="fade-right"
              data-aos-delay="2800"
              data-aos-duration="1000"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="w-[95%] text-center text-white text-sm md:text-lg p-5">
        <h3>
          || Desinged && Developed By{" "}
          <a
            href="https://www.linkedin.com/in/dhvani-p/"
            className="text-text"
            target="_blank"
            rel="noreferrer"
          >
            Dhvani🪶
          </a>
          ||
        </h3>
      </div>
    </footer>
  );
}
export default Contact;
