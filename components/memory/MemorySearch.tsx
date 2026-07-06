"use client";

import { Search } from "lucide-react";

const filters = [
  "All",
  "Students",
  "Lessons",
  "Behaviour",
  "Homework",
];

export default function MemorySearch() {
  return (
    <div className="space-y-5">
      <div className="flex items-center rounded-xl border bg-white px-4 py-3 shadow-sm">
        <Search className="mr-3 h-5 w-5 text-zinc-400" />

        <input
          type="text"
          placeholder="Search memories..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            className="rounded-full border px-4 py-2 text-sm transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}