import { GreateGrid } from "@/components/great-grid";
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
import { ProjectCard } from "@/components/project-card";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BusinessCard } from "@/components/business-card";
import Image from "next/image";
import { MenorQuente } from "@/components/menor-quente";
import { MenorQuenteParalax } from "@/components/menor-quente-paralax";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col overflow-hidden">
      <NavigationHeader>
        <NavigationBody>
          <NavigationAvatar />
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

      <Section anchor="about" className=" bg-mainRed relative">
        <div className="absolute inset-0 w-full h-full grid grid-cols-2 place-items-center">
          <h1 className="text-9xl font-rokiest text-white">
            RUBENS<br></br> ARAUJO
          </h1>
          <p className="text-4xl font-rokiest text-white">
            Graphics Designer, Open to freelance
          </p>
        </div>
        <div className="w-full bg-mainRed min-h-dvh grid grid-cols-1 place-items-center">
          <MenorQuenteParalax />
        </div>
      </Section>

      <Section
        anchor="projects"
        className="min-h-dvh flex flex-col items-center justify-center bg-textDark p-4 gap-8 md:gap-12 lg:gap-32"
      >
        <div className="w-full py-6 md:py-4 px-5 space-y-2">
          <h1 className="text-textLight font-gothic text-4xl md:text-6xl">
            My Projects
          </h1>
          <p className="text-lg font-montserrat text-textMuted">
            You Wanna Know what i have been working on?
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
        className="flex flex-col min-h-auto py-10 gap-10 pb-24"
      >
        <div className="w-full flex flex-col bg-red-40 px-5 py-8">
          <h1 className="text-3xl md:text-6xl text-textDark font-gothic">
            Contact Information
          </h1>
        </div>
        <div className=" flex flex-1 items-center justify-center">
          <div className="w-full px-8 md:px-0 md:max-w-2xl h-[286px]">
            {/** biome-ignore lint/a11y/useValidAriaRole: <needless> */}
            <BusinessCard
              name="Rubens Araújo"
              role="Junior Graphics Designer"
              initials="RB"
              behance="https://www.behance.net/rubensaraujo3"
              linkedin="https://linkedin.com/in/rubens"
              email="rubens@example.com"
            />
          </div>
        </div>
      </Section>
      <footer className="w-full min-h-14 bg-textDark grid grid-cols-2 px-10">
        <div className="flex items-center justify-center">
          <p className="text-sm text-textMuted font-montserrat">
            © 2025 made by{" "}
            <Link href={"https://github.com/retr0lbb"}>retr0lbb</Link>
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <FaGithub className="size-5 md:size-6 text-textMuted cursor-pointer" />
          <FaLinkedin className="size-5 md:size-6 text-textMuted cursor-pointer" />
        </div>
      </footer>
    </div>
  );
}
