"use client";

import {
  Users,
  Activity,
  BookOpen,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    title: "Students",
    value: "26",
  },
  {
    icon: Activity,
    title: "Engagement",
    value: "87%",
  },
  {
    icon: BookOpen,
    title: "Homework",
    value: "92%",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    value: "+12%",
  },
];

export default function ClassroomInsights() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Classroom Insights
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-zinc-50 p-4"
            >
              <Icon className="mb-3 h-6 w-6 text-indigo-600" />

              <p className="text-sm text-zinc-500">
                {item.title}
              </p>

              <p className="text-2xl font-bold">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}