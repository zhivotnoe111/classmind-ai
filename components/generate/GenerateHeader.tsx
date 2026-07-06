"use client";

import { Sparkles } from "lucide-react";

export default function GenerateHeader() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-indigo-600" />

          <h1 className="text-4xl font-bold text-zinc-900">
            Generate Lesson
          </h1>
        </div>

        <p className="mt-3 text-zinc-600">
          Create personalized lesson materials using your classroom memory.
        </p>
      </div>

      <div className="rounded-xl bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
        Classroom Memory Enabled
      </div>
    </header>
  );
}