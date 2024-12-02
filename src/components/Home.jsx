import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full md:h-screen h-full text-white flex flex-col items-center justify-center bg-[#0d67c5] gap-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden sm:block hidden">
        <img
          src="/assets/bgImage.jpeg"
          alt="Background Element"
          className="w-full h-full rotate-180 object-cover opacity-20 mix-blend-normal"
        />
      </div>

      {/* container */}
      <div className="max-w-[1000px] w-full h-full py-20 mx-auto flex flex-col md:flex-row items-center md:pt-36">
        {/* Image for the Mobile View */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-full bottom-0 flex justify-center items-center md:hidden mb-6"
        >
          <img
            src="/assets/rizz-mobile.png"
            alt="Rizwan's mobile view Image"
            className="object-cover w-[250px] h-auto"
            style={{ opacity: 1 }}
          />

          <div className="">
            <img
              src="/assets/bgImage.jpeg"
              alt="Background image for the mobile view"
              className="w-full bg-cover absolute overflow-hidden inset-0 z-0 opacity-20 mix-blend-normal"
              style={{
                width: "250%",
                height: "250%",
                objectFit: "cover",
                transform: "translateY(-40%)"
              }}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center w-full z-10 md:text-left md:w-3/4 pt-10 md:pt-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:text-xl text-md font-sans"
          >
            Hello there,
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl md:text-4xl font-playfair"
            style={{ letterSpacing: "0.1rem" }}
          >
            I’m&nbsp;MOHAMMED&nbsp;RIZWAN
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl md:text-4xl font-sans text-white font-semibold"
            style={{ letterSpacing: "0.1rem" }}
          >
            Versatile&nbsp;HR&nbsp;Professional
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex z-10 text-sm md:text-md text-justify mx-10 md:mx-0 font-sans justify-center items-center mt-4 max-w-prose"
          >
            LinkedIn verified TOP VOICE HR PROFESSIONAL with years of
            comprehensive experience. I specialize in a broad range of HR
            functions, including end-to-end recruitment, operational HR
            activities, payroll management, statutory compliance, and employee
            relations. Demonstrated expertise in optimizing HR processes and
            implementing effective strategies to enhance organizational
            performance and employee satisfaction. Adept at managing all aspects
            of the HR lifecycle, from talent acquisition to onboarding and
            compliance, with a proven track record of driving impactful HR
            initiatives and fostering a positive work environment.
          </motion.div>

          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              x: { duration: 0.2 },
              opacity: { duration: 0.1 },
              ease: "easeIn",
            }}
            className="text-sm md:text-md p-3 rounded-md border-2 hover:bg-orange-500 hover:border-orange-500 text-white justify-center items-center mt-6 hover:scale-105 duration-300"
          >
            <a href="https://topmate.io/hrrizwan001/">Schedule Consultation</a>
          </motion.button>
        </div>

        {/* Image for desktop view */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="overflow-hidden absolute flex justify-center items-center bottom-0 top-0 h-auto md:right-0 pt-36"
        >
          <img
            src="/assets/rizwan-bgcopy.png"
            alt="Riswan's Image desktop view"
            className="object-cover w-full h-full md:block hidden"
            style={{
              opacity: 1,
              objectFit: "cover", // Ensures the image is sized correctly
              transform: "scale(1)", // Ensures no zooming effect
              top: "50%",
              left: "50%",
              transformOrigin: "center center",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
