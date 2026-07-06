"use client";

import { motion } from "framer-motion";
import { Brain, BookOpen, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Memory is captured",
    desc: "ClassMind observes classroom behavior, pace, and understanding patterns.",
  },
  {
    icon: BookOpen,
    title: "Knowledge is structured",
    desc: "It organizes fragments of lessons into meaningful learning context.",
  },
  {
    icon: Sparkles,
    title: "Lesson is generated",
    desc: "Personalized teaching materials are created for the exact needs of the class.",
  },
];

export default function HowMemoryBecomesLesson() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-5xl font-bold text-zinc-900">
            How memory becomes a lesson
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            From observation to understanding — ClassMind transforms classroom
            memory into real teaching material.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Icon className="h-7 w-7 text-indigo-600" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-7 text-zinc-600">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}