import { motion } from "framer-motion";
import { Menus } from "../Constants";

const Navbar = () => {
  const scrollToSection = (title) => {
    const element = document.getElementById(title.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex max-md:hidden fixed right-10 bottom-5 z-50">
      <div>
        <motion.nav>
          {Menus.map((Menu, i) => (
            <motion.li
              key={i}
              onClick={() => scrollToSection(Menu.title)}
              className="flex py-4 cursor-pointer items-center"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={`./assets/${Menu.src}.svg`}
                className="w-5 h-5"
                initial={{ x: 80 + i + 1 }}
                animate={{ x: 0 }}
                transition={{ duration: i, delay: 2 }}
              />
            </motion.li>
          ))}
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
