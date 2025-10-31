"use client";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "framer-motion";

interface PolaroidPhotoProps {
  src: StaticImport;
  alt: string;
  desc?: string;
  rotation?: number;
  index?: number; // para controlar o delay da animação
}

export function PolaroidPhoto(props: PolaroidPhotoProps) {
  const rotation = props.rotation || 0;
  const index = props.index || 0;

  return (
    <motion.div
      className="relative inline-block w-full max-w-[280px] sm:max-w-[320px]"
      initial={{
        rotate: rotation,
        x: 200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.2, // cada foto aparece 0.2s depois da anterior
        ease: "easeOut",
      }}
      whileHover={{
        rotate: 0, // "desentorta" no hover
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
    >
      {/* Alfinete/Pino */}
      <motion.div
        className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
        whileHover={{
          y: -2, // alfinete levanta um pouco
        }}
      >
        <div className="relative">
          {/* Cabeça do alfinete */}
          <div className="w-5 h-5 bg-red-600 rounded-full shadow-md border-2 border-red-700"></div>
          {/* Ponta do alfinete */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* Polaroid */}
      <motion.div
        className="bg-white p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
        whileHover={{
          y: -5, // levanta um pouco
        }}
      >
        {/* Container da imagem - aspect-square garante proporção 1:1 */}
        <div className="bg-gray-100 mb-3 sm:mb-4 overflow-hidden aspect-square w-full">
          <Image
            loading="lazy"
            src={props.src}
            alt={props.alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Descrição ou espaço em branco */}
        <div className="min-h-[60px] sm:min-h-[80px] flex items-center justify-center px-2">
          {props.desc ? (
            <p className="text-gray-700 text-sm sm:text-base text-center">
              {props.desc}
            </p>
          ) : (
            <div className="h-[60px] sm:h-[80px]"></div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
