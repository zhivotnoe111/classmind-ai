"use client";

import {
  Brain,
  BookOpen,
  Users,
} from "lucide-react";

export default function MemoryPreview() {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">
        <Brain className="h-6 w-6 text-indigo-600" />

        <h2 className="text-2xl font-semibold">
          Classroom Memory
        </h2>
      </div>

      <div className="space-y-6">

        <div className="flex gap-4">
          <BookOpen className="mt-1 h-5 w-5 text-indigo-600" />

          <div>
            <h3 className="font-semibold">
              Previous lesson
            </h3>

            <p className="text-sm text-zinc-600">
              Linear equations with real-life examples.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Users className="mt-1 h-5 w-5 text-indigo-600" />

          <div>
            <h3 className="font-semibold">
              Student observations
            </h3>

            <p className="text-sm text-zinc-600">
              Most students struggled with word problems,
              but participation was very high.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}