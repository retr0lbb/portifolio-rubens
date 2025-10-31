import { GreateGrid } from "@/components/great-grid";
import {
  NavigationHeader,
  NAVIGATION_DESTINATIONS,
  NavigationBody,
  NavigationLink,
  NavigationLinksWrapper,
  NavigationAvatar,
} from "@/components/navigation-header";
import { Section } from "@/components/section";
import ART from "@/assets/art.jpg";
import Mike from "@/assets/Mike.jpg";
import Jam from "@/assets/vince.webp";
import Adobe from "@/assets/adobe.png";
import Nike from "@/assets/nik.png";
import MIME from "@/assets/mime.webp";
import DOOM from "@/assets/doom.webp";
import BFF from "@/assets/bff.png";
import { PolaroidPhoto } from "@/components/polaroid-image";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col overflow-hidden">
      <NavigationHeader>
        <NavigationBody>
          <NavigationAvatar />
          <NavigationLinksWrapper>
            <NavigationLink text="Home" to={NAVIGATION_DESTINATIONS.HOME} />
            <NavigationLink text="About" to={NAVIGATION_DESTINATIONS.ABOUT} />
            <NavigationLink
              text="Projects"
              to={NAVIGATION_DESTINATIONS.PROJECTS}
            />
            <NavigationLink
              text="Contact"
              to={NAVIGATION_DESTINATIONS.CONTACT}
            />
          </NavigationLinksWrapper>
        </NavigationBody>
      </NavigationHeader>
      <Section anchor="home" className="">
        <GreateGrid />
        <div className="flex flex-1 flex-col items-start justify-end pb-10 pt-2 px-4">
          <h1 className="text-9xl font-bold text-textDark">Rubens Araújo</h1>
          <p className="text-2xl font-medium text-textSecondary">
            Eager to transform your dreams to reality
          </p>
        </div>
      </Section>

      <Section className="min-h-dvh flex flex-col p-5">
        <div className="w-full h-full flex flex-col">
          <div className="w-full p-5 flex items-center justify-end">
            <h1 className="text-8xl text-textDark font-semibold">About Me</h1>
          </div>

          <div className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Fio vermelho */}
            <div className="absolute top-[74px] left-0 right-0 h-0.5 bg-red-600 z-0"></div>

            {/* Container das fotos */}
            <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 justify-center items-start relative z-10 max-w-7xl mx-auto">
              <PolaroidPhoto
                src={ART}
                alt="Descrição"
                desc="Rubens Araújo Filho - 2006"
                rotation={-2}
                index={0}
              />
              <PolaroidPhoto
                src={Jam}
                alt="Descrição"
                desc="I have Passion for basketball and I have played on an amateur team"
                rotation={-1}
                index={1}
              />
              <PolaroidPhoto
                src={Adobe}
                alt="Descrição"
                rotation={2}
                desc="I'm a graphics designer i got hired as a designer for the first time in 2020."
                index={2}
              />

              <PolaroidPhoto
                src={Mike}
                alt="Descrição"
                rotation={2}
                desc="In the next 30 years i plan to start my own company."
                index={3}
              />
              <PolaroidPhoto
                src={Jam}
                alt="Descrição"
                desc="Henrique is my sugar daddy he gives me anything i want 💘"
                rotation={-1}
                index={5}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="min-h-dvh flex flex-col items-center bg-textDark p-4 gap-4">
        <div className="w-full py-4 px-5 space-y-2">
          <h1 className="text-textLight font-semibold text-6xl">My Projects</h1>
          <p className="text-lg text-textMuted">
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
          <ProjectCard
            src={DOOM}
            title="Dooms Day, marvel, 2024"
            desc="HQ like style for dooms story."
          />
          <ProjectCard
            src={Jam}
            title="Space Jam, 1987"
            desc="Movie about basketball with cartoon characters."
          />

          <ProjectCard
            src={BFF}
            title="BRASIL FURFEST 2026"
            desc="Furry Event with HQ like style."
          />
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
          <ProjectCard
            src={DOOM}
            title="Dooms Day, marvel, 2024"
            desc="HQ like style for dooms story."
          />
          <ProjectCard
            src={Jam}
            title="Space Jam, 1987"
            desc="Movie about basketball with cartoon characters."
          />

          <ProjectCard
            src={BFF}
            title="BRASIL FURFEST 2026"
            desc="Furry Event with HQ like style."
          />
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
          <ProjectCard
            src={DOOM}
            title="Dooms Day, marvel, 2024"
            desc="HQ like style for dooms story."
          />
          <ProjectCard
            src={Jam}
            title="Space Jam, 1987"
            desc="Movie about basketball with cartoon characters."
          />

          <ProjectCard
            src={BFF}
            title="BRASIL FURFEST 2026"
            desc="Furry Event with HQ like style."
          />
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
          <ProjectCard
            src={DOOM}
            title="Dooms Day, marvel, 2024"
            desc="HQ like style for dooms story."
          />
          <ProjectCard
            src={Jam}
            title="Space Jam, 1987"
            desc="Movie about basketball with cartoon characters."
          />

          <ProjectCard
            src={BFF}
            title="BRASIL FURFEST 2026"
            desc="Furry Event with HQ like style."
          />
        </div>
      </Section>

      <Section anchor="contact" className="flex flex-col min-h-dvh"></Section>
    </div>
  );
}
