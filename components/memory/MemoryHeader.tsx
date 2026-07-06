"use client";

import { Brain } from "lucide-react";

export default function MemoryHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <Brain className="h-8 w-8 text-indigo-600" />

          <h1 className="text-3xl font-bold">
            Classroom Memory
          </h1>
        </div>

        <p className="mt-2 text-zinc-600">
          Everything ClassMind remembers about your classroom.
        </p>
      </div>

      <button className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700">
        Add Memory
      </button>
    </div>
  );
}