"use client";

import { Brain } from "lucide-react";

export default function GeneratingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 animate-pulse">

          <Brain className="h-10 w-10 text-indigo-600" />

        </div>

        <h2 className="mt-8 text-3xl font-bold text-zinc-900">
          Preparing your lesson
        </h2>

        <p className="mt-4 leading-7 text-zinc-600">
          ClassMind is reviewing previous lessons,
          classroom memory and learning progress.
        </p>

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-zinc-200">

          <div className="h-full w-full animate-pulse rounded-full bg-indigo-600" />

        </div>

      </div>

    </div>
  );
}