import PropTypes from "prop-types";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px #eb771e",
    transition: {
      type: "spring",
      stiffness: 50,
      ease: "easeInOut",
      rotation: 24,
    },
  },
};

function Buttons(props) {
  return (
    <div className="flex flex-row gap-5 mt-5" data-aos="flip-right">
      <motion.button
        className="border-2 px-3 py-1 rounded-md border-text text-2xl hover:border-white"
        whileHover="hover"
        variants={buttonVariants}
      >
        <a
          href={props.data.live}
          target="_blank"
          rel="noreferrer"
          className="cursor-alias"
        >
          live
        </a>
      </motion.button>
      <motion.button
        className="border-2 px-3 py-1 rounded-md border-text text-2xl hover:border-white"
        whileHover="hover"
        variants={buttonVariants}
      >
        <a
          href={props.data.code}
          target="_blank"
          rel="noreferrer"
          className="cursor-alias"
        >
          code
        </a>
      </motion.button>
    </div>
  );
}

Buttons.propTypes = {
  data: PropTypes.shape({
    live: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default Buttons;
