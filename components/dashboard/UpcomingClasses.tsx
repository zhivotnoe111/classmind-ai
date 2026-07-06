"use client";

const classes = [
  {
    subject: "Mathematics 8B",
    time: "09:00",
  },
  {
    subject: "Physics 10A",
    time: "11:00",
  },
  {
    subject: "Computer Science",
    time: "14:30",
  },
];

export default function UpcomingClasses() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Upcoming Classes
      </h2>

      <div className="mt-6 space-y-4">
        {classes.map((lesson) => (
          <div
            key={lesson.subject}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-medium">
                {lesson.subject}
              </p>

              <p className="text-sm text-zinc-500">
                {lesson.time}
              </p>
            </div>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
              Today
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}