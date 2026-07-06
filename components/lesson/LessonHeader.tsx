"use client";

import { BookOpen } from "lucide-react";

export default function LessonHeader() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-indigo-600" />

          <h1 className="text-4xl font-bold text-zinc-900">
            Generated Lesson
          </h1>
        </div>

        <p className="mt-3 text-zinc-600">
          Personalized using your classroom memory.
        </p>
      </div>

      <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
        Ready
      </div>
    </header>
  );
}