import About from "@/components/about";
// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
// import Intro from "@/components/intro";
// import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import dynamic from "next/dynamic";
// import Skills from "@/components/skills";


const Intro = dynamic(() => import("@/components/intro"));

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </main>
  );
}
