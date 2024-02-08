import { motion } from "framer-motion";

export default function Star() {
  return (
    <div className="max-sm:hidden absolute left-[50%] top-32 z-50 opacity-30 rotate-45">
      <motion.svg
        width="38"
        height="38"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse stroke-1 hover:stroke-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, ease: "easeInOut" }}
      >
        <path
          d="M11.4127 17.76L4.35926 21.7082L5.93459 13.7799L0 8.2918L8.02704 7.34006L11.4127 0L14.7983 7.34006L22.8253 8.2918L16.8908 13.7799L18.4661 21.7082L11.4127 17.76ZM11.4127 15.468L15.6594 17.8451L14.7109 13.0717L18.284 9.7674L13.4511 9.19434L11.4127 4.77502L9.37425 9.19434L4.54132 9.7674L8.11442 13.0717L7.16594 17.8451L11.4127 15.468Z"
          fill="url(#paint0_linear_14_151)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_151"
            x1="-7"
            y1="-11"
            x2="11.4127"
            y2="21.7082"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.111" stopColor="#2B67E0" stopOpacity="1" />
            <stop offset="0.971" stopColor="#33D0CE" stopOpacity="1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
