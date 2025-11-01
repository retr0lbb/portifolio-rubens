import { GreateGrid } from "@/components/great-grid";
import {
  NavigationHeader,
  NavigationBody,
  NavigationLink,
  NavigationLinksWrapper,
  NavigationAvatar,
} from "@/components/navigation-header";
import { Section } from "@/components/section";
import ART from "@/assets/art.jpg";
import Nike from "@/assets/nik.png";
import MIME from "@/assets/mime.webp";
import MenorQuente from "@/assets/menor-quente.svg";
import { ProjectCard } from "@/components/project-card";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { BusinessCard } from "@/components/business-card";
import Image from "next/image";

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
      <Section className="min-h-dvh" anchor="home">
        <div className="w-full h-full flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center justify-end">
            <span className="text-9xl text-left font-rokiest z-20 text-mainRed">
              DESIGN
            </span>
            <div className="text-9xl text-left flex items-center gap-2 relative font-rokiest pr-64 z-10 text-mainRed">
              VISUALS
              <div className=" absolute right-0 z-0">
                <Image
                  alt="menorQuente"
                  src={MenorQuente}
                  width={224}
                  style={{ rotate: "24deg" }}
                  className=""
                />
              </div>
            </div>

            <span className="font-rokiest text-9xl text-left z-10 text-mainRed">
              STORIES
            </span>
          </div>
        </div>
      </Section>

      <Section anchor="about" className="bg-blue-400"></Section>

      <Section
        anchor="projects"
        className="min-h-dvh flex flex-col items-center bg-textDark p-4 gap-4"
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
            src={ART}
            title="Louv're Museum 7781, 2022"
            desc="Classical art, painting 2025"
          />
          <ProjectCard
            src={Nike}
            title='Nike "Be Free", 2024'
            desc="Very Modern art for nike campaing, youth, freedom"
          />
          <ProjectCard
            src={MIME}
            title='Adobe "IM Different", 2026'
            desc="Modernist Adobe Different, inclusion"
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
