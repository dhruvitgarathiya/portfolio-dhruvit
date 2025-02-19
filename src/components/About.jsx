import React from "react";
import aboutImg from "../assets/newimg.jpg";
import { ABOUT_TEXT } from "../assets/constants"; // Ensure this file exists and exports ABOUT_TEXT
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="pb-4 border-b lg:mb-3 border-neutral-900">
      <h2 className="my-20 text-4xl text-center font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center lg:justify-between">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="w-80 h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 px-6"
        >
          <p className="max-w-xl py-6 text-justify text-lg leading-relaxed">
            {ABOUT_TEXT ||
              "I am a passionate developer with experience in web technologies."}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
