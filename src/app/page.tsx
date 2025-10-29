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

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
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
      <Section>
        <GreateGrid />
        <div className="flex flex-1 flex-col items-start justify-end pb-10 pt-2 px-4">
          <h1 className="text-9xl font-bold text-textDark">Rubens Araújo</h1>
          <p className="text-2xl font-medium text-textSecondary">
            Eager to transform your dreams to reality
          </p>
        </div>
      </Section>
    </div>
  );
}
