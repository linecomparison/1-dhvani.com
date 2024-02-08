import { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="about" className="container flex flex-col">
      <h1
        className="text-3xl md:text-4xl font-bold"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        About Me
      </h1>
      <hr
        className="border-t-[2px] border-accent w-1/6 max-md:w-1/3"
        data-aos="flip-left"
      />
      <div className="flex flex-row gap-4">
        <div className="mt-4 md:mt-5">
          <hr
            className="w-6 md:w-12 md:border-t-[2.4px] border-yellow-400"
            data-aos="fade-right"
          />
        </div>
        <p
          className="flex flex-wrap text-xl md:text-2xl text-[#cdc8c8]"
          data-aos="fade-up"
        >
          Skills can be taught,personality is inherent.I prefer to continue
          challenging myself,do intresting things that matter and keep learning
          & expanding <br />
          <span
            className="text-3xl text-text font-semibold"
            data-aos="fade-right"
          >
            My Skills.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
