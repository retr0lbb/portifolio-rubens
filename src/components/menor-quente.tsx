"use client";
import Image from "next/image";
import MenorQuenteImg from "@/assets/menor-quente-papel.png";
import { motion } from "framer-motion";

interface MenorQuenteProps {
  size?: number;
}

export function MenorQuente(props: MenorQuenteProps) {
  return (
    <motion.div
      className="absolute -bottom-4 md:-bottom-7 right-2 md:right-10 z-0 size-32 md:size-64"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 10 }}
    >
      <Image
        alt="menorQuente"
        src={MenorQuenteImg}
        width={props.size ?? 248}
        style={{ rotate: "6deg" }}
        className="drop-shadow-2xl"
      />
    </motion.div>
  );
}
