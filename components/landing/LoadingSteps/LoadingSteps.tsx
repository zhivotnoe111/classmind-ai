"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Observe the classroom",
    description:
      "ClassMind quietly captures participation, pace and understanding.",
  },
  {
    icon: Database,
    title: "Build long-term memory",
    description:
      "Every lesson becomes structured knowledge instead of forgotten notes.",
  },
  {
    icon: Sparkles,
    title: "Generate teaching strategy",
    description:
      "AI prepares the next lesson using everything it already knows.",
  },
];

export default function LoadingSteps() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-32">

      {/* Background */}

      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            AI Pipeline
          </div>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-zinc-950 md:text-6xl">
            From classroom
            <br />
            to personalized lesson
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Every classroom interaction becomes memory.
            Every memory becomes better teaching.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical line */}

          <div className="absolute left-6 top-0 h-full w-px bg-zinc-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20">

            {steps.map((step, index) => {
              const Icon = step.icon;

              const left = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .15,
                    duration: .7,
                  }}
                  className={`relative flex ${
                    left
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Circle */}

                  <div
                    className="
                      absolute
                      left-6
                      top-10
                      flex
                      h-12
                      w-12
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-indigo-600
                      shadow-lg
                      md:left-1/2
                    "
                  >
                    <Icon
                      size={20}
                      className="text-white"
                    />
                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      ml-16
                      w-full
                      rounded-3xl
                      border
                      border-zinc-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-shadow
                      hover:shadow-xl
                      md:ml-0
                      md:w-[44%]
                    "
                  >
                    <div className="flex items-center justify-between">

                      <h3 className="text-2xl font-semibold text-zinc-900">
                        {step.title}
                      </h3>

                      <CheckCircle2
                        size={24}
                        className="text-green-500"
                      />

                    </div>

                    <p className="mt-5 leading-8 text-zinc-600">
                      {step.description}
                    </p>

                    {/* Progress */}

                    <div className="mt-8">

                      <div className="mb-3 flex justify-between text-sm text-zinc-500">
                        <span>Completed</span>
                        <span>100%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-zinc-200">

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: "100%",
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1.4,
                            delay: .4,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        />

                      </div>

                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}