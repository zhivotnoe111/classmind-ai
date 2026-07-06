"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function FinishStep() {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

        <CheckCircle2 className="h-12 w-12 text-green-600" />

      </div>

      <h2 className="mt-8 text-4xl font-bold">
        Your classroom is ready!
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
        ClassMind is now ready to build lessons using your
        classroom profile and future classroom memory.
      </p>

      <Link
        href="/dashboard"
        className="mt-10 inline-flex rounded-xl bg-indigo-600 px-8 py-4 text-white transition hover:bg-indigo-700"
      >
        Go to Dashboard
      </Link>

    </div>
  );
}