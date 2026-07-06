"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Brain,
  Sparkles,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/classroom",
    label: "Classroom",
    icon: GraduationCap,
  },
  {
    href: "/memory",
    label: "Memory",
    icon: Brain,
  },
  {
    href: "/generate",
    label: "Generate",
    icon: Sparkles,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-zinc-200 bg-white">

      {/* Logo */}

      <div className="border-b border-zinc-200 p-6">
        <h1 className="text-2xl font-bold text-zinc-900">
          ClassMind
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Teacher AI
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4">

        <div className="space-y-2">

          {links.map((link) => {
            const Icon = link.icon;

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Footer */}

      <div className="border-t border-zinc-200 p-6">

        <div className="rounded-xl bg-zinc-100 p-4">

          <p className="text-sm font-medium text-zinc-900">
            ClassMind AI
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Version 0.1 MVP
          </p>

        </div>

      </div>

    </aside>
  );
}