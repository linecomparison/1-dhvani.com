import { motion } from "framer-motion";
import { skills } from "../Constants";

export default function Skills() {
  return (
    <div
      id="skills"
      className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-4 md:grid-cols-5 place-content-center place-items-center w-10/12 m-auto mt-5 overflow-hidden"
    >
      {skills.map((data, i) => {
        return (
          <div key={i}>
            <div data-aos="fade-left" data-aos-duration={`${i * 3000}`}>
              <motion.img
                className={`w-28 h-28 max-lg:w-24max-lg:h-24 max-md:w-20 max-md:h-20 max-sm:w-16 max-sm:h-16  my-10 transform ${data.rotation}`}
                src={`./assets/${data.name}.svg`}
                alt={`${data.name}`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
