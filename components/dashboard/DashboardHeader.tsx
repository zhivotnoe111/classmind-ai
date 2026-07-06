"use client";

import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-zinc-900">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-zinc-600">
          Heres whats happening in your classroom today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-xl border bg-white px-4 py-2 shadow-sm">
          <Search className="mr-2 h-4 w-4 text-zinc-400" />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        <button className="rounded-xl border bg-white p-3 shadow-sm hover:bg-zinc-100">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
          A
        </div>
      </div>
    </header>
  );
}