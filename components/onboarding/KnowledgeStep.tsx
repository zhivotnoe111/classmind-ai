"use client";

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function KnowledgeStep() {
  return (
    <div className="mx-auto max-w-xl">

      <h2 className="text-3xl font-bold">
        Knowledge level
      </h2>

      <p className="mt-3 text-zinc-600">
        Describe the overall level of the class.
      </p>

      <div className="mt-10 space-y-4">

        {levels.map((level) => (
          <button
            key={level}
            className="w-full rounded-xl border border-zinc-300 p-5 text-left transition hover:border-indigo-500 hover:bg-indigo-50"
          >
            {level}
          </button>
        ))}

      </div>

    </div>
  );
}