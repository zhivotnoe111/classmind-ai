"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GraduationCap,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Students",
    items: [
      "Participation",
      "Confidence",
      "Learning gaps",
      "Progress over time",
    ],
  },
  {
    icon: BookOpen,
    title: "Lessons",
    items: [
      "Topics covered",
      "Teaching pace",
      "Homework",
      "Learning objectives",
    ],
  },
  {
    icon: MessageCircle,
    title: "Classroom",
    items: [
      "Questions asked",
      "Discussions",
      "Collaboration",
      "Engagement level",
    ],
  },
];
export default function WhatClassMindRemembers() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Long-term Memory
          </span>

          <h2 className="mt-8 text-5xl font-bold tracking-tight text-zinc-950 md:text-6xl">
            What ClassMind remembers
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Not recordings.
            Not transcripts.
            Real classroom context that improves every future lesson.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <Icon className="h-7 w-7 text-indigo-600" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {card.title}
                </h3>

                <ul className="mt-6 space-y-3">

                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-zinc-600"
                    >
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />

                      {item}
                    </li>
                  ))}

                </ul>

              </motion.div>
            );
          })}

          {/* Memory Card */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: .5,
            }}
            whileHover={{
              y: -8,
            }}
            className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 text-white shadow-xl"
          >
            <Brain className="h-10 w-10" />

            <h3 className="mt-8 text-3xl font-semibold">
              Continuous Memory
            </h3>

            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Every lesson improves the next one.

              Instead of isolated sessions,
              ClassMind builds one continuous understanding
              of your classroom throughout the entire school year.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}