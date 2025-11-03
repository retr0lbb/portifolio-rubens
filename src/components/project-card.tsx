"use client";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface ProjectCardProps {
  src: StaticImport | string;
  title: string;
  desc: string;
  href: string;
}

export function ProjectCard(props: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false, // anima toda vez que entrar/sair da view
    margin: "-50px", // distância menor - começa 50px antes
  });

  return (
    <Link href={props.href} target="_blank">
      <div
        ref={ref}
        className="flex h-full flex-col gap-3 cursor-pointer transition-all break-inside-avoid mb-8"
      >
        {/* Container da imagem com animação */}
        <motion.div
          className="w-full overflow-hidden aspect-auto"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 50,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.8,
                  y: 50,
                }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={props.src}
            alt="Image alt"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Textos estáticos */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-textDark font-montserrat">
            {props.title}
          </h1>
          <p className="font-normal text-md text-textSecondary font-montserrat">
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
