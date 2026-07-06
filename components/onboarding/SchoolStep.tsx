"use client";

export default function SchoolStep() {
  return (
    <div className="mx-auto max-w-xl">

      <h2 className="text-3xl font-bold">
        Tell us about your school
      </h2>

      <p className="mt-3 text-zinc-600">
        Just a few details to personalize your experience.
      </p>

      <div className="mt-10 space-y-6">

        <div>

          <label className="mb-2 block font-medium">
            School name
          </label>

          <input
            type="text"
            placeholder="Springfield High School"
            className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
          />

        </div>

      </div>

    </div>
  );
}