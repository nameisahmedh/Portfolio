import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Kammar Ahmed</p>
            <p className="subtext">
              a Data Science student who translates ideas into impact through both software and data analysis. My projects include developing machine learning models, data visualization dashboards, and full-stack web applications. I focus on leveraging data to solve real-world problems and create meaningful insights.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl text-gray-500">
              TOOLS & LANGUAGES
            </p>
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="/assets/logos/java.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="/assets/logos/jupyter.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="/assets/logos/n8n.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="/assets/logos/mysql.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="/assets/logos/mongodb.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "45%", left: "35%" }}
              image="/assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "70%", left: "60%" }}
              image="/assets/logos/html5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "25%", left: "65%" }}
              image="/assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "55%", left: "15%" }}
              image="/assets/logos/nodejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "10%", left: "40%" }}
              image="/assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "45deg", top: "35%", left: "5%" }}
              image="/assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "75%", left: "35%" }}
              image="/assets/logos/visualstudiocode.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "60%", left: "80%" }}
              image="/assets/logos/github.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "85%", left: "10%" }}
              image="/assets/logos/vercel.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Hyderabad, India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in data science tools, web development frameworks, and programming languages that allow me to build data-driven applications and analytical solutions
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
