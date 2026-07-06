import { GeneratedLesson } from "@/types/generatedLesson";

interface LessonOverviewProps {
  lesson: GeneratedLesson;
}

export default function LessonOverview({
  lesson,
}: LessonOverviewProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Lesson Overview
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-sm text-zinc-500">
            Title
          </p>

          <p className="font-semibold">
            {lesson.lesson.title}
          </p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Duration
          </p>

          <p>{lesson.lesson.duration}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Objective
          </p>

          <p>{lesson.lesson.objective}</p>
        </div>

        <div>
          <p className="text-sm text-zinc-500">
            Materials
          </p>

          <p>{lesson.lesson.materials}</p>
        </div>

      </div>
    </div>
  );
}