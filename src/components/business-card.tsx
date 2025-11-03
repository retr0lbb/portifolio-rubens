/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <no need> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <no need> */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  FaBehanceSquare,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import MenorQuente from "@/assets/menor-quente.svg";

interface BusinessCardProps {
  name?: string;
  role?: string;
  initials?: string;
  behance?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

export function BusinessCard(props: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full h-full min-h-[280px]">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Frente do Card */}
        <motion.div
          className="absolute w-full h-full backface-hidden cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            pointerEvents: isFlipped ? "none" : "auto",
          }}
          onClick={() => setIsFlipped(true)}
        >
          <div className="w-full h-full border-2 border-textMuted bg-white flex items-center justify-between p-4 md:p-8 lg:p-10 gap-6 md:gap-8 lg:gap-10 shadow-lg rounded-lg relative overflow-hidden">
            {/* Textura de Gesso */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                  ),
                  radial-gradient(
                    circle at 20% 30%,
                    rgba(255, 255, 255, 0.8) 0%,
                    transparent 50%
                  ),
                  radial-gradient(
                    circle at 80% 70%,
                    rgba(0, 0, 0, 0.05) 0%,
                    transparent 50%
                  )
                `,
                backgroundSize: "100% 100%, 100% 100%, 200% 200%, 200% 200%",
                filter: "blur(0.5px)",
              }}
            />

            {/* Logo/Iniciais */}
            <div className="aspect-square min-w-[100px] md:min-w-[120px] lg:min-w-[140px] bg-mainRed flex items-center justify-center shadow-md relative z-10">
              <Image width={100} alt="menor quente" src={MenorQuente} />
            </div>

            {/* Informações */}
            <div className="flex flex-1 flex-col justify-between gap-4 min-h-[140px] relative z-10">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-bg-dark font-montserrat">
                  {props.name || "Rubens Araujo"}
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-bold text-mainRed font-montserrat">
                  {props.role || "Junior Graphics Designer"}
                </p>
              </div>

              <div className="text-textSecondary">
                <Link
                  target="_blank"
                  href={
                    props.behance || "https://www.behance.net/rubensaraujo3"
                  }
                  className="inline-flex items-center gap-2 hover:text-mainRed transition-colors text-sm md:text-base w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaBehanceSquare className="text-lg md:text-xl" />
                  <span className="truncate">behance.net/rubensaraujo3</span>
                </Link>
              </div>

              <div className="text-xs text-textMuted italic">
                Click to see contact info →
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verso do Card */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            pointerEvents: isFlipped ? "auto" : "none",
          }}
        >
          <div className="w-full h-full border-2 border-textMuted bg-white flex flex-col justify-between p-6 md:p-8 lg:p-10 shadow-lg rounded-lg relative overflow-hidden">
            {/* Textura de Gesso */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 0, 0, 0.03) 2px,
                    rgba(0, 0, 0, 0.03) 4px
                  ),
                  radial-gradient(
                    circle at 20% 30%,
                    rgba(255, 255, 255, 0.8) 0%,
                    transparent 50%
                  ),
                  radial-gradient(
                    circle at 80% 70%,
                    rgba(0, 0, 0, 0.05) 0%,
                    transparent 50%
                  )
                `,
                backgroundSize: "100% 100%, 100% 100%, 200% 200%, 200% 200%",
                filter: "blur(0.5px)",
              }}
            />

            {/* Header - Clicável para voltar */}
            <div
              className="border-b border-textMuted pb-4 relative z-10 cursor-pointer"
              onClick={() => setIsFlipped(false)}
            >
              <h2 className="text-xl md:text-2xl font-bold text-mainRed">
                Contact Information
              </h2>
            </div>

            {/* Links - Área interativa */}
            <div className="flex-1 flex flex-col justify-center gap-4 py-4 relative z-10">
              {props.email && (
                <Link
                  href={`mailto:${props.email}`}
                  className="inline-flex items-center gap-3 text-textDark hover:text-mainRed transition-colors group w-fit"
                >
                  <FaEnvelope className="text-xl md:text-2xl text-mainRed group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base">{props.email}</span>
                </Link>
              )}

              {props.linkedin && (
                <Link
                  target="_blank"
                  href={props.linkedin}
                  className="inline-flex items-center gap-3 text-textDark hover:text-mainRed transition-colors group w-fit"
                >
                  <FaLinkedin className="text-xl md:text-2xl text-mainRed group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base">{props.linkedin}</span>
                </Link>
              )}

              {props.instagram && (
                <Link
                  target="_blank"
                  href={props.instagram}
                  className="inline-flex items-center gap-3 text-textDark hover:text-mainRed transition-colors group w-fit"
                >
                  <FaInstagram className="text-xl md:text-2xl text-mainRed group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base">
                    {props.instagram}
                  </span>
                </Link>
              )}
            </div>

            {/* Footer hint - Clicável para voltar */}
            <div
              className="border-t border-textMuted pt-4 relative z-10 cursor-pointer"
              onClick={() => setIsFlipped(false)}
            >
              <p className="text-xs text-textMuted font-montserrat italic text-right">
                ← Click to flip back
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
