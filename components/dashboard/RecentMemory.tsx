"use client";

const memories = [
  "Students struggled with quadratic graphs.",
  "Homework completion increased this week.",
  "More participation during group work.",
];

export default function RecentMemory() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Recent Memory
      </h2>

      <div className="mt-6 space-y-4">
        {memories.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-zinc-50 p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}