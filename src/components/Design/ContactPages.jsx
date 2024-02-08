function ContactPages() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
      <div>
        <hr
          className="w-16 md:border-t-[2px] border-yellow-400"
          data-aos="flip-left"
          data-aos-duration="1000"
        />
      </div>
      <a
        href="https://www.linkedin.com/in/dhvani-p/"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="900"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/linkedin.svg`}
          className="w-8 h-8 md:w-10 md:h-11 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
      <a
        href="https://github.com/Knight-03"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="1200"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/github.svg`}
          className="w-10 h-10 md:w-16 md:h-16 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
      <a
        href="https://twitter.com/_Knight_03?t=RAUCj1kaiYvTS-_A6bwa8w&s=09"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="1400"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/x.svg`}
          className="w-6 h-6 md:w-10 md:h-9 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
      <a
        href="https://leetcode.com/Knight-03/"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="1600"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/leetcode.svg`}
          className="w-8 h-8 md:w-10 md:h-11 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
      <a
        href="https://auth.geeksforgeeks.org/user/knight_03/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="1800"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/gfg.svg`}
          className="w-8 h-8 md:w-12 md:h-12 mt-2 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
      <a
        href="https://www.codechef.com/users/dr_patel"
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-delay="1800"
        data-aos-duration="1000"
      >
        <img
          src={`./assets/codechef.svg`}
          className="w-8 h-8 md:w-12 md:h-12 transition hover:scale-[1.2] ease-in-out"
        />
      </a>
    </div>
  );
}

export default ContactPages;
