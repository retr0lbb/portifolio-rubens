import { twMerge } from "tailwind-merge";

interface SectionProps {
  anchor?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Section(props: SectionProps) {
  return (
    <section
      className={twMerge(
        "w-full h-dvh overflow-hidden flex flex-col bg-bgLight",
        props.className,
      )}
      id={props.anchor}
    >
      {props.children}
    </section>
  );
}
