"use client";

import {
  Users,
  Brain,
  BookOpen,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Students",
    value: "26",
  },
  {
    icon: Brain,
    title: "Memory Items",
    value: "184",
  },
  {
    icon: BookOpen,
    title: "Lessons",
    value: "38",
  },
  {
    icon: Sparkles,
    title: "AI Generated",
    value: "12",
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <Icon className="mb-4 h-8 w-8 text-indigo-600" />

            <p className="text-sm text-zinc-500">
              {card.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {card.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
}