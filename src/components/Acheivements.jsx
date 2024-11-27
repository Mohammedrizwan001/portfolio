import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuTrophy } from "react-icons/lu";
import { motion } from "framer-motion";

const Acheivements = () => {
  return (
    <div name="achievements" className="w-full h-full bg-[#F8F8F8] p-8 pt-16">
      <motion.h2
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
        className="text-4xl justify-center text-center text-[#13131a] font-playfair mb-10"
      >
        Acheivements
      </motion.h2>
      <VerticalTimeline lineColor="#0d67c5">
        <VerticalTimelineElement
          name="vertical-timeline-element-achievements"
          icon={<LuTrophy />}
          iconStyle={{
            background: "#0d67c5",
            color: "white",
            boxShadow: "none",
          }}
          contentStyle={{
            background: "#0d67c5",
            color: "black",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d67c5" }}
          className="hover:scale-105 duration-300 font-sans"
        >
          <p className="text-white">
            <span className="font-semibold text-[#f0e68c]">
              Achieved 60+ Hires in 3 Months with a 20%
            </span>{" "}
            reduction in Time-to-Hire, streamlining recruitment processes for
            faster results.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          name="vertical-timeline-element-achievements"
          icon={<LuTrophy />}
          iconStyle={{
            background: "#0d67c5",
            color: "white",
            boxShadow: "none",
          }}
          contentStyle={{
            background: "#0d67c5",
            color: "white",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d67c5" }}
          className="hover:scale-105 duration-300"
        >
          <p>
            <span className="font-semibold text-[#f0e68c]">
              Consistently Attained 100% Monthly Hiring Closure twice,
            </span>{" "}
            fulfilling all open positions within target timelines.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          name="vertical-timeline-element-achievements"
          icon={<LuTrophy />}
          iconStyle={{
            background: "#0d67c5",
            color: "white",
            boxShadow: "none",
          }}
          contentStyle={{
            background: "#0d67c5",
            color: "white",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d67c5" }}
          className="hover:scale-105 duration-300"
        >
          <p>
            <span className="font-semibold text-[#f0e68c]">
              Guided 20+ Freshers to Job Success
            </span>{" "}
            through personalized 1:1 mentoring, contributing to early-career
            growth.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          name="vertical-timeline-element-achievements"
          icon={<LuTrophy />}
          iconStyle={{
            background: "#0d67c5",
            color: "white",
            boxShadow: "none",
          }}
          contentStyle={{
            background: "#0d67c5",
            color: "white",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d67c5" }}
          className="hover:scale-105 duration-300"
        >
          <p>
            <span className="font-semibold text-[#f0e68c]">
              Increased Employee Retention by 25%
            </span>{" "}
            by implementing engagement initiatives that fostered a positive and
            collaborative workplace.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          name="vertical-timeline-element-achievements"
          icon={<LuTrophy />}
          iconStyle={{
            background: "#0d67c5",
            color: "white",
            boxShadow: "none",
          }}
          contentStyle={{
            background: "#0d67c5",
            color: "white",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0d67c5" }}
          className="hover:scale-105 duration-300"
        >
          <p>
            <span className="font-semibold text-[#f0e68c]">
              Reduced Attrition Rates by 15%
            </span>{" "}
            through tailored development programs and proactive employee
            feedback sessions, supporting long-term retention.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Acheivements;
