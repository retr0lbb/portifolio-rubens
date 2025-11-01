import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  anchor?: string;
  children?: React.ReactNode;
  className?: string;
  imgSrc?: StaticImport;
}

export function Section(props: SectionProps) {
  return (
    <section
      className={twMerge(
        "w-full min-h-dvh flex flex-col bg-white relative",
        props.className,
      )}
      id={props.anchor}
    >
      {props.children}
      {props.imgSrc !== undefined && (
        <Image
          src={props.imgSrc}
          alt="bg"
          className="absolute inset-0 w-full h-full"
        />
      )}
    </section>
  );
}
