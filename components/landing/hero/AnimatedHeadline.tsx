"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const headlines = [
  "Every classroom remembers.",
  "Now your lessons can too.",
  "Teach less. Inspire more.",
];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[360px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={headlines[index]}
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -40,
            scale: 0.98,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-0
            top-0
            max-w-3xl
            text-5xl
            font-bold
            leading-tight
            tracking-tight
            text-zinc-950
            md:text-6xl
          "
        >
          {headlines[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}