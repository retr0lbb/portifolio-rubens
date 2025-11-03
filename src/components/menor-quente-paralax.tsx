/** biome-ignore-all lint/a11y/noStaticElementInteractions: needless*/
"use client";

import MenorQuente from "@/assets/menor_quentao.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

export function MenorQuenteParalax() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0.5, y: 0.5 })}
      className="relative w-full h-full flex items-center justify-center"
    >
      <motion.div
        animate={{
          rotateY: (position.x - 0.5) * 45, // Era 20, agora 45
          rotateX: -(position.y - 0.5) * 45, // Era 20, agora 45
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }} // Mais rápido e responsivo
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Brilho que segue o mouse */}
        <motion.div
          animate={{
            x: (position.x - 0.5) * 300, // Era 200, agora 300
            y: (position.y - 0.5) * 300,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="absolute inset-0"
          style={{
            transform: "translateZ(50px)",
          }}
        />

        {/* Imagem */}
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            alt="menor pegando fogo"
            src={MenorQuente}
            fill
            className="object-contain drop-shadow-2xl"
            style={{ transform: "translateZ(30px)" }}
          />
        </div>

        <motion.div
          animate={{
            x: -(position.x - 0.5) * 40, // Era 20, agora 40
            y: -(position.y - 0.5) * 40,
            scale: 0.8 + (position.y - 0.5) * 0.4, // Era 0.2, agora 0.4
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-black/30 rounded-full blur-2xl -z-10"
          style={{ transform: "translateZ(-50px)" }}
        />
      </motion.div>
    </div>
  );
}
