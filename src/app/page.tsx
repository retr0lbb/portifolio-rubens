import {
  NavigationHeader,
  NavigationBody,
  NavigationLink,
  NavigationLinksWrapper,
  NavigationAvatar,
} from "@/components/navigation-header";
import { Section } from "@/components/section";
import Kaet from "@/assets/kaete.jpg";
import IAB from "@/assets/iaboa.jpg";
import PRAN from "@/assets/pranc.jpg";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BusinessCard } from "@/components/business-card";
import { MenorQuente } from "@/components/menor-quente";
import { MenorQuenteParalax } from "@/components/menor-quente-paralax";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col overflow-hidden">
      <NavigationHeader>
        <NavigationBody>
          <NavigationLinksWrapper>
            <NavigationLink text="Home" to={"/#home"} />
            <NavigationLink text="About" to={"/#about"} />
            <NavigationLink text="Projects" to={"/#projects"} />
            <NavigationLink text="Contact" to={"/#contact"} />
          </NavigationLinksWrapper>
        </NavigationBody>
      </NavigationHeader>
      <Section className="min-h-dvh relative" anchor="home">
        <div className="w-full flex items-center justify-between px-10 py-8 top-0">
          <p className="text-2xl font-rokiest text-blue-700">PORTFOLIO</p>
          <p className="text-2xl font-rokiest text-blue-700">2025</p>
        </div>
        <div className="w-full h-full flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center justify-end gap">
            <span className="text-7xl lg:text-10xl leading-none text-left font-rokiest z-20 text-mainRed">
              DESIGN
            </span>
            <div className="text-7xl lg:text-10xl leading-none text-left flex items-center gap-2 relative font-rokiest pr-32 md:pr-[264px] -mt-2.5 z-10 text-mainRed">
              VISUALS
              <MenorQuente />
            </div>

            <span className="font-rokiest text-7xl lg:text-10xl leading-none text-left z-10 -mt-2.5 text-mainRed">
              STORIES
            </span>
          </div>
        </div>
      </Section>

      <Section anchor="about" className="bg-mainRed">
        <div className="w-full min-h-dvh grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 md:p-10 lg:p-0">
          {/* Coluna 1 - Nome */}
          <div className="flex items-center justify-center lg:justify-start lg:pl-10 xl:pl-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-rokiest text-white text-center lg:text-left leading-tight">
              RUBENS ARAUJO
            </h1>
          </div>

          {/* Coluna 2 - Imagem Parallax */}
          <div className="flex items-center justify-center min-h-[400px] lg:min-h-full">
            <MenorQuenteParalax />
          </div>

          {/* Coluna 3 - Descrição */}
          <div className="flex flex-col gap-4 justify-center lg:pr-10 xl:pr-20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-rokiest text-white text-center lg:text-left leading-tight">
              GRAPHIC DESIGNER<br></br>OPEN TO FREELANCE
            </p>
            <p className="text-base sm:text-lg md:text-xl font-montserrat text-white max-w-[600px] text-center lg:text-left mx-auto lg:mx-0">
              Creative professional, passionate about design and with an
              aptitude for learning and adapting to new challenges. I have solid
              skills in Photoshop, Illustrator, and strategic digital media
              creation, always seeking innovative solutions to deliver quality
              results.
            </p>
          </div>
        </div>
      </Section>

      <Section
        anchor="projects"
        className="min-h-dvh flex flex-col items-center justify-center bg-white p-4 gap-8 md:gap-12 lg:gap-32"
      >
        <div className="w-full py-6 md:py-4 px-5 space-y-2">
          <h1 className="text-mainRed font-rokiest text-center text-6xl md:text-10xl">
            MY PROJECTS
          </h1>
          <p className="text-lg md:text-3xl font-montserrat text-center text-blue-700">
            WHAT I HAVE BEEN WORKING ON
          </p>
        </div>
        <div className="h-full w-auto columns-1 sm:columns-2 md:columns-3 max-w-full px-6 pb-8">
          <ProjectCard
            src={IAB}
            title="IA Boa"
            desc="Digital app design focused on pubs"
            href="https://www.behance.net/gallery/219051477/IaBoa-Identidade-Visual"
          />
          <ProjectCard
            src={Kaet}
            title="Caeté"
            desc="Major logo design for clothe company"
            href="https://www.instagram.com/caeteloja"
          />
          <ProjectCard
            src={PRAN}
            href="https://www.behance.net/gallery/216466691/Brazilian-Icons-Vintage-Sports-Posters"
            title="Vintage Sports Posters"
            desc="Posters design representing the greatest Brazilian athletes"
          />
        </div>
      </Section>

      <Section
        anchor="contact"
        className="flex flex-col min-h-auto py-10 gap-20 md:gap-10 pb-48 md:pb-32"
      >
        <div className="w-full flex items-center justify-center text-5xl font-rokiest text-">
          CONTACT
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full px-4 md:px-0 md:max-w-2xl h-[246px] md:h-[286px]">
            {/** biome-ignore lint/a11y/useValidAriaRole: <needless> */}
            <BusinessCard
              name="Rubens Araujo"
              role="Junior Graphic Designer"
              initials="RB"
              behance="https://www.behance.net/rubensaraujo3"
              linkedin="https://www.linkedin.com/in/rubensaraujofilho"
              instagram="https://www.instagram.com/rubns.araujo"
              email="rubensaraujo877@gmail.com"
            />
          </div>
        </div>
      </Section>
      <footer className="w-full min-h-14 bg-textDark flex items-center justify-between px-10">
        <div className="flex items-center justify-center">
          <p className="text-sm text-textMuted font-montserrat">
            © 2025 made by{" "}
            <Link href={"https://github.com/retr0lbb"}>retr0lbb</Link>
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link href={"https://github.com/retr0lbb"}>
            <FaGithub className="size-5 md:size-6 text-textMuted cursor-pointer" />
          </Link>
          <Link href={"https://www.linkedin.com/in/henrique-barbosa-sampaio/"}>
            <FaLinkedin className="size-5 md:size-6 text-textMuted cursor-pointer" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
