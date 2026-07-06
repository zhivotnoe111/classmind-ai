"use client";

import { Sparkles } from "lucide-react";

export default function GenerateLessonCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Sparkles className="h-6 w-6 text-indigo-600" />

        <h2 className="text-xl font-semibold">
          Generate Lesson
        </h2>
      </div>

      <p className="mt-4 text-zinc-600">
        Use classroom memory to automatically create a personalized lesson.
      </p>

      <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700">
        Generate AI Lesson
      </button>
    </div>
  );
}