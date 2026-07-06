"use client";

import { Brain } from "lucide-react";

interface MemoryCardProps {
  title: string;
  description: string;
  date: string;
}

export default function MemoryCard({
  title,
  description,
  date,
}: MemoryCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <Brain className="h-6 w-6 text-indigo-600" />

        <h3 className="font-semibold text-zinc-900">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-zinc-600">
        {description}
      </p>

      <p className="mt-5 text-sm text-zinc-400">
        {date}
      </p>
    </div>
  );
}