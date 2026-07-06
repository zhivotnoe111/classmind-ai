"use client";

const features = [
  "Very active class",
  "Needs additional support",
  "Strong academic performance",
  "Enjoys group work",
  "Mixed ability",
  "Project-based learning",
  "Inclusive classroom",
  "Other",
];

export default function FeaturesStep() {
  return (
    <div className="mx-auto max-w-2xl">

      <h2 className="text-3xl font-bold">
        Classroom profile
      </h2>

      <p className="mt-3 text-zinc-600">
        Select everything that describes your classroom.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">

        {features.map((feature) => (
          <button
            key={feature}
            className="rounded-xl border border-zinc-300 p-5 text-left transition hover:border-indigo-500 hover:bg-indigo-50"
          >
            {feature}
          </button>
        ))}

      </div>

    </div>
  );
}