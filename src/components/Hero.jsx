import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Spline from "./Spline/Spline";
import Star from "./Design/Star";
import PaperPlane from "./Design/paperPlane";

function Hero() {
  const [animateText, setAnimateText] = useState(false);
  const textControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true);
    }, 4300);
  }, []);

  useEffect(() => {
    if (animateText) {
      textControls.start("rotate");
    }
  }, [animateText, textControls]);

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 3 } },
    rotate: {
      rotate: [-2, 0],
      transition: {
        duration: 1,
      },
    },
  };

  const dotVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, type: "spring", stiffness: 120, delay: 1 },
    },
  };

  const buttonVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        ease: "easeInOut",
        delay: 4.6,
      },
    },
    hover: { scale: 1.1, boxShadow: "0px 0px 8px #eb771e" },
  };

  return (
    <header
      id="home"
      className="flex flex-col items-center justify-center lg:flex-row w-full"
    >
      <div className="w-full px-5 md:px-16 lg:w-1/2 py-10">
        <Star />
        <PaperPlane />
        <div className="text-3xl ">
          <motion.span
            className="font-bold leading-none text-3xl sm:text-[3rem] md:text-[4rem] bg-gradient-to-tl from-[#e2f64c] to-[#88f31d] text-transparent bg-clip-text [text-shadow:rgb(100_150_120)_-0px_0px_60px]"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            Frontend <br /> Developer
            <motion.span
              className="font-sans text-[#d8d7d7] inline-block"
              variants={dotVariants}
            >
              .
            </motion.span>{" "}
          </motion.span>
          <br />
          <motion.span
            className="relative w-[max-content] before:absolute before:inset-0 before:bg-background before:animate-typewriter text-2xl inline-block mt-10"
            style={{ rotate: animateText ? "-4deg" : "0deg" }}
          >
            Hi👋,I am Dhvani
          </motion.span>
          <span className="max-sm:hidden">.</span> <br />
          <motion.p
            className="text-lg text-white leading-relaxed mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, ease: "easeInOut" }}
          >
            A person who likes to craft convenient and beautiful <br />
            interfaces with great user experiences.
          </motion.p>
        </div>

        <a
          href="https://drive.google.com/file/d/1pKAWE0B2k1tykQxBUy9eVdAEGg1V5Koz/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <motion.button
            className="text-white text-xl p-2 md:py-2 md:px-5 rounded-md focus:outline-none border-2 border-text animate-pulse focus:shadow-outline mt-5 overflow-hidden"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            Resume →
          </motion.button>
        </a>
      </div>
      <div className="w-full lg:w-1/2 md:py-12 py-5">
        <Spline />
      </div>
    </header>
  );
}

export default Hero;
