import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div name="service" className="w-full h-full bg-[#F8F8F8] text-[#13131a] p-8 md:pt-20">
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
      }} className="mb-8">
        <h1 className="text-2xl md:text-4xl text-center font-playfair pb-8">Services I Provide</h1>
      </motion.div>

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
      }} className="grid grid-cols-1 md:grid-cols-4 font-sans gap-8 px-4">
        {[
          {
            title: "Resume Writing & Reviewing",
            description:
              "Struggling to make your resume stand out? I’ll craft a professional, impactful resume that highlights your strengths and captures the attention of recruiters, helping you make a strong first impression.",
            bgColor: "#0d67c5",
          },
          {
            title: "Career Guidance",
            description:
              "Let’s map out a career path that aligns with your skills, interests, and aspirations. I’ll guide you through the steps to achieve your goals with clarity and confidence.",
            bgColor: "#0d67c5",
          },
          {
            title: "LinkedIn Optimization",
            description: "Transform your LinkedIn profile into a powerful personal brand that stands out and attracts the right opportunities.",
            bgColor: '#0d67c5',
          },
          {
            title: "Personal Branding",
            description: "Enhance your professional presence with tailored strategies for LinkedIn optimization and personal branding success.",
            bgColor: '#0d67c5',
          },
          {
            title: "Mentorship",
            description:
              "Looking for personal growth in your career journey? I offer personalized mentorship, tailored to help you develop essential skills and navigate challenges with ease.",
            bgColor: "#0d67c5",
          },
          {
            title: "Interview Prep & Tips",
            description:
              "Ace your next interview with confidence! We’ll go through questions, techniques, and strategies that help you stand out and make a lasting impression.",
            bgColor: "#0d67c5",
          },
          {
            title: "Mock Interview",
            description:
              "Practice makes perfect! Get real-time feedback in a simulated interview setting, so you can refine your responses and walk into the real thing feeling fully prepared.",
            bgColor: "#0d67c5",
          },
          {
            title: "Doubt Session",
            description:
              "Have specific questions or doubts? Bring them here! I’ll help clarify any uncertainties and provide detailed answers to give you peace of mind.",
            bgColor: "#0d67c5",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white text-[#13131a] rounded-md shadow-sm relative text-center font-sans transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 overflow-hidden"
          >
            {/* Top Section with Down Arrow */}
            <div
              className="relative text-white font-semibold text-md md:text-lg py-4"
              style={{
                backgroundColor: service.bgColor,
                borderRadius: "0.5rem 0.5rem 0 0",
              }}
            >
              {service.title}
              {/* Down Arrow */}
              <div
                className="absolute justify-center left-0 w-full h-0"
                style={{
                  top: "calc(100% - 1px)",
                  borderLeft: "100px solid transparent",
                  borderRight: "100px solid transparent",
                  borderTop: `30px solid ${service.bgColor}`,
                  zIndex: -1, 
                }}
              ></div>
            </div>

            {/* Description */}
            <div className="overflow-hidden">
              <p className="text-gray-700 text-sm md:text-md px-4 py-10">{service.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
