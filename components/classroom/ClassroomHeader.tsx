"use client";

import { GraduationCap } from "lucide-react";

export default function ClassroomHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-indigo-600" />

          <h1 className="text-3xl font-bold">
            Mathematics 8B
          </h1>
        </div>

        <p className="mt-2 text-zinc-600">
          AI classroom memory for todays lesson.
        </p>
      </div>

      <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
        Memory Active
      </div>
    </div>
  );
}