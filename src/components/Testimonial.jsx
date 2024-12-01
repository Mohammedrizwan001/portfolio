import React, { useState } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const testimonials = [
    {
      name: "Ephrem F",
      title: "Soft Skill Trainer",
      image: "/assets/men.jpeg",
      shortText:
        "I had the pleasure of training Mohammed Rizwan during a soft skills session and it’s been great to see him grow and succeed in his career. Now, as a recruiter, Mr. Mohammed Rizwan shows hard work, dedication, and a strong curiosity that stands out.",
      fullText:
        "Mr. Mohammed Rizwan was always eager to learn and improve during all our training. He actively participated and showed a genuine interest in developing his skills. This same enthusiasm is clear in his professional work. I am confident that Mr. Mohammed Rizwan will continue to do well in his career, , by finding and attracting top talent. His hard work and curious mindset will help him reach new heights. I highly recommend Mr. Mohammed Rizwan for any role that values dedication and passion for growth.",
    },
    {
      name: "Janaki Vadivelu",
      title: "HR Manager",
      image: "/assets/girl.jpeg",
      shortText:
        "I highly recommend Rizwan for any talent acquisition role. During his internship at TAT, he closed five key positions with minimal training.",
      fullText:
        "Rizwan’s professionalism, teamwork, and efficiency make him a pleasure to work with. His dedication to achieving goals and positive attitude ensure he’s a valuable asset to any team. In summary, Rizwan is a talented recruiter with a bright future ahead in talent acquisition.",
    },
    {
      name: "Divya L",
      title: "Co-Founder & CEO",
      image: "/assets/girl.jpeg",
      shortText:
        "I am writing to commend Rizwan for his outstanding contributions to our company. His dedication and professionalism have greatly enhanced our HR functions, from recruitment to employee relations.",
      fullText:
        "Rizwan has consistently ensured that our employees feel supported and valued. His proactive approach and ability to handle sensitive matters with care have earned him the respect of both management and staff. I highly recommend Rizwan for any recognition he may receive, as the impact on our company has been significant.",
    },
    {
      name: "Koushika K",
      title: "Colleague",
      image: "/assets/girl.jpeg",
      shortText:
        "Working with Riswan was a great experience because of his professionalism, teamwork, and efficiency. His dedication to meeting our goals and his positive attitude made a big difference to our team.",
      fullText:
        "Riswan is also good at talent acquisition, showing his well-rounded skills. I’m sure he will do very well in the future.",
    },
  ];

  return (
    <div
      name="testimonial"
      className="w-full h-full p-8 bg-[#F8F8F8] text-[#13131a]"
    >
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
        className="text-2xl md:text-4xl font-playfair text-center justify-center mt-4 md:mt-6"
      >
        <p>Testimonials</p>
      </motion.div>

      {/* Testimonials Section */}
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
        className="w-full bg-[#F8F8F8] text-[#13131a] text-sm justify-center py-12 md:px-8 md:mt-6"
      >
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-white text-[#13131a] font-sans rounded-lg shadow-lg w-full md:w-1/4  hover:scale-105 duration-300"
            >
              <BiSolidQuoteAltRight className="absolute -top-9 right-4 text-orange-600 text-[80px]" />
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-sans font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-sans">{testimonial.title}</p>
                </div>
              </div>
              <p className="mb-2 text-sm">{testimonial.shortText}</p>
              {expandedIndex === index && (
                <p className="font-sans text-sm">{testimonial.fullText}</p>
              )}
              <button
                onClick={() => handleToggle(index)}
                className="text-[#0d67c5] font-sans underline"
              >
                {expandedIndex === index ? "See Less" : "See More"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
