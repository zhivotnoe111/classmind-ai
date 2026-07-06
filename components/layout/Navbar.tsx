"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <BrainCircuit className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold">ClassMind</span>
        </Link>

        <nav className="hidden gap-8 md:flex text-sm font-medium text-zinc-600">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/classroom">Classroom</Link>
          <Link href="/generate">Generate</Link>
        </nav>

        <Link
          href="/dashboard"
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Open App
        </Link>
      </div>
    </header>
  );
}