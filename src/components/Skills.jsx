import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen h-full bg-[#F8F8F8] text-[#13131a] p-8 md:pt-8 pt-2"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center">
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            by: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-2xl md:text-4xl font-playfair text-center"
        >
          Skills
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            by: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-md md:text-2xl font-sans font-semibold mt-8 mb-8 text-center"
        >
          Shaping HR excellence through the skills I wield.
        </motion.p>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            by: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="md:w-[1200px] w-full max-w-full h-full md:p-2 mt-4 bg-[#0d67c5] rounded-xl shadow-lg shadow-white overflow-hidden"
        >
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-[#13131a] font-semibold py-8">
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/hiring.png"
                  alt="Skill 1"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Talent Acquisition</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/relations.png"
                  alt="Skill 2"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Employee Relations</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/e-eng.png"
                  alt="Skill 3"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Employee Engagement</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/hrms.png"
                  alt="Skill 4"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">HRMS</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/statutory.png"
                  alt="Skill 5"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Statutory Compliance</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/partner.png"
                  alt="Skill 6"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Business Partnering</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/policy.png"
                  alt="Skill 7"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Policy Development</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/tm.png"
                  alt="Skill 8"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Talent Management</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/org.png"
                  alt="Skill 9"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Organizational Development</p>
            </div>
            
            <div
              className="flex flex-col items-center"
            >
              <div className="shadow-md bg-white rounded-md hover:scale-105 duration-500 md:w-32 md:h-32 w-24 h-24 flex justify-center items-center mx-auto">
                <img
                  src="/assets/payroll.png"
                  alt="Skill 10"
                  className="w-20 mx-auto"
                />
              </div>
              <p className="mt-2 text-sm">Payroll Management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
