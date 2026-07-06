"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

import AnimatedHeadline from "./AnimatedHeadline";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-white" />

      <div className="absolute left-1/2 top-[-250px] -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Badge */}

            <motion.div
              whileHover={{ y: -2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm"
            >
              <Sparkles
                size={16}
                className="text-indigo-600"
              />

              <span className="text-sm font-medium text-zinc-700">
                Invisible Intelligence
              </span>

            </motion.div>

            {/* Headline */}

            <AnimatedHeadline />

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: .8,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-zinc-600"
            >
              ClassMind understands every classroom,
              remembers every lesson,
              and prepares personalized teaching materials
              in minutes.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.3,
              }}
              className="mt-12 flex flex-wrap gap-4"
            >

              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow:
                    "0 20px 45px rgba(79,70,229,.18)",
                }}
                whileTap={{
                  scale: .98,
                }}
                className="group flex items-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 font-medium text-white hover:bg-indigo-500"
              >
                Try Live Demo

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </motion.button>

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: .98,
                }}
                className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-7 py-4 font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
              >
                <Play size={18} />

                Watch Preview
              </motion.button>

            </motion.div>

            {/* Bottom */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.7,
              }}
              className="mt-14 flex items-center gap-3"
            >

              <div className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-sm text-zinc-500">
                Memory Active
              </span>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: .4,
              duration: .8,
            }}
          >
            <HeroPreview />
          </motion.div>

        </div>

      </div>

    </section>
  );
}