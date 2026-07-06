"use client";

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Geography",
  "English",
  "Computer Science",
];

export default function SubjectStep() {
  return (
    <div className="mx-auto max-w-xl">

      <h2 className="text-3xl font-bold">
        What subject do you teach?
      </h2>

      <p className="mt-3 text-zinc-600">
        Choose your primary subject.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">

        {subjects.map((subject) => (
          <button
            key={subject}
            className="rounded-xl border border-zinc-300 p-5 text-left transition hover:border-indigo-500 hover:bg-indigo-50"
          >
            {subject}
          </button>
        ))}

      </div>

    </div>
  );
}