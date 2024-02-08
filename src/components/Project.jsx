import { useState } from "react";
import Buttons from "./Design/Buttons";
import { projectDetails } from "../Constants";

function Project() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const toggleProjectDetails = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <div id="project" className="mt-6 md:mt-16">
      <h1
        className="text-3xl md:text-4xl font-bold"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Projects
      </h1>
      <div>
        <hr
          className="w-52 md:border-t-[2.4px] border-yellow-400"
          data-aos="flip-left"
        />
      </div>
      <div className="flex flex-col w-full bg-background justify-center items-center gap-5 text-[#ede0e0] py-8 mb-12">
        <div className="w-full overflow-x-auto">
          <div className="relative max-sm:left-40  flex flex-row w-full gap-8 justify-center text-base md:text-3xl">
            {projectDetails.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`flex flex-row p-2 border-2 border-accent  ${
                    selectedProjectIndex === i && "border-white"
                  } rounded-md hover:border-text`}
                >
                  <button
                    onClick={() => toggleProjectDetails(i)}
                    className="bg-gradient-to-tl from-[#e2f64c] to-[#88f31d] text-transparent bg-clip-text"
                    data-aos="fade-up"
                    data-aos-duration={`${1000 * (i + 1)}`}
                  >
                    {data.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-3 w-full text-base md:text-xl">
          {projectDetails.map((data, i) => {
            return (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-center gap-4"
              >
                {selectedProjectIndex === i && (
                  <>
                    <div className=" w-full  md:w-5/12">
                      <div>
                        <p
                          className="py-4"
                          data-aos="fade-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="1000"
                        >
                          {data.detail}
                        </p>
                        <p
                          className="mt-5 text-xl md:text-2xl"
                          data-aos="fade-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2500"
                        >
                          Created Using:{" "}
                          <span className="md:font-semibold text-text">
                            {data.createdUsing}
                          </span>
                        </p>
                      </div>
                      <Buttons data={data} />
                    </div>
                    <div className="w-full overflow-hidden md:w-5/12 py-4">
                      <video
                        controls
                        autoPlay
                        muted
                        className="rounded-md w-full"
                        data-aos="fade-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <source src={data.video} type="video/mp4" />
                      </video>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
