import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-[#F8F8F8] text-[#13131a]">
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
        className="text-xl md:text-4xl font-playfair justify-center items-center text-center pt-8 mb-6"
      >
        <p className="p-4 pb-4">Let’s Build Great Teams Together.</p>
        <p className="p-4 text-md md:text-2xl text-[#0d67c5] font-sans font-semibold">
          Reach out to unlock HR Excellence!
        </p>
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
        }}
      className="w-full h-[100px] flex flex-row items-center justify-between bg-white/50 mt-6 px-4 md:px-52 md:py-6 gap-4"
      >
        <p className="text-sm md:text-xl font-semibold text-center md:text-left  mb-4 pt-6">
          Request for consultation
        </p>
        <button className="rounded-md h-10 bg-orange-600 flex items-center justify-center text-sm text-white hover:scale-105 duration-300 shadow-sm shadow-black/40 px-6 py-2">
          <a href="mailto:mohammedrizz2803@gmail.com">Contact Me</a>
        </button>
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
        }}
        className="w-full h-full text-white"
      >
        <div className="w-full h-auto text-sm md:text-md bg-[#0d67c5] text-white p-4 md:p-8">
          <div className="flex flex-row justify-center items-center gap-6 md:gap-12">
            <p>
              <a
                href="https://www.linkedin.com/in/rizzu007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
                Hire Me!
              </a>
            </p>
            <p>
              <a href="https://topmate.io/hrrizwan001/">Career Guidance</a>
            </p>
            <p>
              <a href="tel:8608928979">Service Inquiry</a>
            </p>
          </div>
        </div>
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
        }}
        className="flex flex-row items-center bg-[#F8F8F8] p-1 md:p-8 gap-20 md:gap-[650px]"
      >
        <p className="text-sm md:text-[18px] text-center mb-4 pt-4 md:pl-40">
          For online contact
        </p>
        <div className="flex justify-center">
          <div className="w-10 h-10 p-2 justify-center items-center hover:scale-105 duration-300">
            <a href="tel:8608928979" className="text-[#13131a]">
              <MdLocalPhone size={20} className="md:size-[25px]" />
            </a>
          </div>
          <div className="w-10 h-10 p-2 justify-center items-center hover:scale-105 duration-300">
            <a
              href="mailto:mohammedrizz2803@gmail.com"
              className="text-[#13131a]"
            >
              <MdEmail size={20} className="md:size-[25px]" />
            </a>
          </div>
          <div className="w-10 h-10 p-2 justify-center items-center hover:scale-105 duration-300">
            <a
              href="https://www.linkedin.com/in/rizzu007?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="text-[#13131a]"
            >
              <FaLinkedinIn size={20} className="md:size-[25px]" />
            </a>
          </div>
          <div className="w-10 h-10 p-2 justify-center items-center hover:scale-105 duration-300">
            <a
              href="https://www.instagram.com/career_with_comrade/profilecard/?igsh=NGN1bHJuamNxaWVt"
              className="text-[#13131a]"
            >
              <AiFillInstagram size={20} className="md:size-[25px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
