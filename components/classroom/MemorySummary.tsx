"use client";

import { Brain } from "lucide-react";

export default function MemorySummary() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Brain className="h-6 w-6 text-indigo-600" />

        <h2 className="text-xl font-semibold">
          Memory Summary
        </h2>
      </div>

      <div className="mt-6 space-y-3 text-zinc-600">
        <p>• Students need more graph practice.</p>
        <p>• Factoring remains the weakest topic.</p>
        <p>• Group activities improve engagement.</p>
      </div>

      <div className="mt-6 rounded-xl bg-indigo-50 p-4">
        <p className="text-sm text-indigo-700">
          Memory updated after todays lesson.
        </p>
      </div>
    </div>
  );
}