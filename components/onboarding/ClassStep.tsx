"use client";

export default function ClassStep() {
  return (
    <div className="mx-auto max-w-xl">

      <h2 className="text-3xl font-bold">
        What is your class called?
      </h2>

      <p className="mt-3 text-zinc-600">
        Example: Mathematics 8B
      </p>

      <div className="mt-10">

        <input
          type="text"
          placeholder="8B"
          className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
        />

      </div>

    </div>
  );
}