import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    {
      label: "Talent Acquisition & Recruitment",
      panelId: "panel-1",
      content: [
        "IT Recruitment",
        "Non IT Recruitment",
        "C2H Hiring",
        "Contract Staffing",
        "Volume Hiring",
      ],
    },
    {
      label: "HR Operation",
      panelId: "panel-2",
      content: [
        "Employee Management",
        "Onboarding & Offboarding",
        "Payroll Management",
        "HRMS Handling",
      ],
    },
    {
      label: "People & Culture",
      panelId: "panel-3",
      content: [
        "Employee Engagement",
        "Employee Retention",
        "Grievance Handling",
        "Event Management",
      ],
    },
    {
      label: "Administration",
      panelId: "panel-4",
      content: [
        "Vendor Management",
        "Stake Holder Management",
        "Facility Management",
        "Statutory Compliance",
      ],
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsDropdownOpen(false); // Close dropdown after selecting
  };

  // Create the style for shifting content dynamically based on the active tab (desktop view)
  const contentShiftStyles = [
    "translate-x-0", // For the 1st tab: No shift
    "translate-x-[33%]", // For the 2nd tab: Shift by 33%
    "translate-x-[60%]", // For the 3rd tab: Shift by 60%
    "translate-x-[78%]", // For the 4th tab: Shift by 78%
  ];

  return (
    <div
      name="about"
      className="w-full h-full bg-[#F8F8F8] text-[#13131a] flex justify-center items-center p-8"
    >
      <div className="max-w-[1200px] w-full p-4 lg:px-6 mx-auto">


        {/* Title section */}
        <motion.h2
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
          className="text-4xl text-[#13131a] font-playfair text-center mb-4"
        >
          About Me
        </motion.h2>



        {/* Intro Section */}
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
          className="text-xl text-[#0d67c5] font-sans text-center mt-8 mb-8"
        >
          Building bridges between great talent and opportunities
        </motion.p>

        {/* Dropdown for mobile view */}
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
          className="relative block md:hidden font-sans"
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left p-4 mt-8 bg-white text-[#0d67c5] font-sans font-semibold shadow-lg rounded-lg flex justify-between items-center text-md"
          >
            <span>{tabs[activeTab].label}</span>
            <FiChevronDown
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <ul className="absolute w-full font-sans bg-white shadow-lg mt-2 rounded-lg z-10">
              {tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left p-2 hover:bg-gray-200 text-sm"
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </motion.div>

        

        {/* Tabs for desktop view */}
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
          className="hidden md:flex font-sans justify-between items-center bg-white text-[#13131a] shadow-lg rounded-lg p-4 mt-8"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-2 py-2 text-center cursor-pointer text-md ${
                activeTab === index
                  ? "text-[#0d67c5] font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Fixed content container for desktop with dynamic shifting */}
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
          className="mt-6 font-sans rounded-lg px-8 py-4 bg-white text-[#13131a] overflow-hidden shadow-lg p-6 lg:p-8 relative hidden md:block"
        >
          <div
            className={`transition-transform duration-500 overflow-hidden ${contentShiftStyles[activeTab]}`}
          >
            <h2 className="text-xl font-semibold text-black">
              {tabs[activeTab].label}
            </h2>
            <ul className="mt-4 list-disc list-inside">
              {tabs[activeTab].content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Fixed content container for mobile without shifting (left-aligned) */}
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
          className="mt-6 font-sans rounded-lg px-8 py-4 bg-white text-black shadow-lg p-6 lg:p-8 block md:hidden"
        >
          <div>
            <h2 className="text-xl font-semibold">{tabs[activeTab].label}</h2>
            <ul className="mt-4 list-disc list-inside text-left">
              {tabs[activeTab].content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
