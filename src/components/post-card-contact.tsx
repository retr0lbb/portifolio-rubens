"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface PostCardProps {
  isPorn?: false;
  frontTitle?: string;
  frontMessage?: string;
  backMessage?: string;
  backSignature?: string;
}

export function PostCard(props: PostCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full h-full min-h-[400px] cursor-pointer">
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Frente do Cartão */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl p-8 md:p-12 flex flex-col justify-between border-4 border-white">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {props.frontTitle || "Greetings!"}
              </h2>
              <p className="text-white/90 text-xl md:text-2xl lg:text-3xl">
                {props.frontMessage || "A postcard from afar..."}
              </p>
            </div>
            <div className="flex justify-end">
              <div className="w-20 h-16 md:w-24 md:h-20 bg-white/20 border-2 border-white/40 rounded flex items-center justify-center">
                <span className="text-sm md:text-base text-white">STAMP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verso do Cartão */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col justify-between border-4 border-gray-200">
            <div className="flex-1">
              <div className="border-b-2 border-gray-300 pb-6 mb-6">
                <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
                  {props.backMessage ||
                    "Wish you were here! Having an amazing time. The weather is beautiful and the views are incredible."}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 italic text-lg md:text-xl lg:text-2xl">
                  {props.backSignature || "- Your Friend"}
                </p>
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-6 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm md:text-base text-gray-500 mb-2">To:</p>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="text-sm md:text-base text-gray-400">
                  Click to flip
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
