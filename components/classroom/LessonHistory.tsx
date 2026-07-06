"use client";

const lessons = [
  {
    topic: "Quadratic Equations",
    date: "Yesterday",
  },
  {
    topic: "Linear Functions",
    date: "3 days ago",
  },
  {
    topic: "Geometry Review",
    date: "Last week",
  },
];

export default function LessonHistory() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Lesson History
      </h2>

      <div className="mt-6 space-y-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.topic}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-medium">
                {lesson.topic}
              </p>

              <p className="text-sm text-zinc-500">
                {lesson.date}
              </p>
            </div>

            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
              Completed
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}