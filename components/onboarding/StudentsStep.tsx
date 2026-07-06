"use client";

export default function StudentsStep() {
  return (
    <div className="mx-auto max-w-xl">

      <h2 className="text-3xl font-bold">
        How many students?
      </h2>

      <p className="mt-3 text-zinc-600">
        This helps estimate classroom dynamics.
      </p>

      <div className="mt-10">

        <input
          type="number"
          placeholder="28"
          className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
        />

      </div>

    </div>
  );
}