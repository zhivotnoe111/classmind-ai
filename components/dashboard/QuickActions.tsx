"use client";

import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-6 flex flex-wrap gap-4">
        <Link
          href="/generate"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          Generate Lesson
        </Link>

        <Link
          href="/memory"
          className="rounded-xl border px-5 py-3 hover:bg-zinc-100"
        >
          Open Memory
        </Link>

        <Link
          href="/classroom"
          className="rounded-xl border px-5 py-3 hover:bg-zinc-100"
        >
          Classroom
        </Link>
      </div>
    </div>
  );
}