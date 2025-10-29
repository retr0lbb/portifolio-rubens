import { GreateGrid } from "@/components/great-grid";
import {
  NavigationHeader,
  NAVIGATION_DESTINATIONS,
  NavigationBody,
  NavigationLink,
  NavigationLinksWrapper,
} from "@/components/navigation-header";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <NavigationHeader>
        <NavigationBody>
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
      </Section>
    </div>
  );
}
