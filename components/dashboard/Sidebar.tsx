"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  GraduationCap,
  Brain,
  Sparkles,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: GraduationCap,
    title: "Classroom",
    href: "/classroom",
  },
  {
    icon: Brain,
    title: "Memory",
    href: "/memory",
  },
  {
    icon: Sparkles,
    title: "Generate",
    href: "/generate",
  },
  {
    icon: Settings,
    title: "Settings",
    href: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          ClassMind
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          AI Teaching Assistant
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-700 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-6">
        <div className="rounded-2xl bg-indigo-50 p-4">
          <p className="font-medium text-indigo-700">
            Memory Active
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Classroom context is continuously updated.
          </p>
        </div>
      </div>
    </aside>
  );
}