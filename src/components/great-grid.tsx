/** biome-ignore-all lint/suspicious/noArrayIndexKey: <no need> */
"use client";
import { motion } from "framer-motion";

export function GridItem(props: { index: number }) {
  return (
    <motion.div
      initial={{ rotate: 0, y: -100, opacity: 0 }}
      animate={{
        rotate: [props.index % 2 === 0 ? 90 : 180, 0],
        y: [100, -10, 10, 0],
        opacity: 100,
      }}
      transition={{
        duration: 1,
        ease: "circOut",
      }}
      className="w-full aspect-square grid grid-cols-5 grid-rows-5 place-items-center"
    >
      {Array.from({ length: 25 }).map((_, index) => {
        return (
          <div
            key={index}
            className={`w-full aspect-square ${props.index % 2 === 0 ? "even:bg-mainRed" : "odd:bg-mainRed"}`}
          />
        );
      })}
    </motion.div>
  );
}

export function GreateGrid() {
  return (
    <div className="w-full h-auto grid grid-cols-3 grid-rows-1 place-items-center">
      {Array.from({ length: 3 }).map((_, index) => {
        return <GridItem key={index} index={index} />;
      })}
    </div>
  );
}
