"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Before graduating with a degree in{" "}
        <span className="font-medium">Computer Application</span>, I decided to
        pursue my passion in Web Development. I Started my journey and learned{" "}
        <span className="font-semibold text-orange-500">
          frontend web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-semibold text-purple-500">
          React, Next.js and Node.js
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-semibold text-green-500">full-time position</span>{" "}
        as a software developer.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy playing
        video games and watching anime. I also enjoy{" "}
        <span className="font-medium">learning new technologies</span>. I am
        currently learning{" "}
        <span className="font-semibold text-cyan-500">GOlang</span>.
      </p>
    </motion.section>
  );
}
