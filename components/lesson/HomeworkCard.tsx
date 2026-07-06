import { GeneratedLesson } from "@/types/generatedLesson";

interface HomeworkCardProps {
  lesson: GeneratedLesson;
}

export default function HomeworkCard({
  lesson,
}: HomeworkCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Homework
      </h2>

      <div className="mt-6">

        <p className="font-semibold">
          Instructions
        </p>

        <p className="mt-2">
          {lesson.homework.instructions}
        </p>

      </div>

      <div className="mt-6 space-y-3">

        {lesson.homework.tasks.map((task, index) => (

          <div
            key={index}
            className="rounded-xl border border-zinc-200 p-4"
          >
            {task}
          </div>

        ))}

      </div>

    </div>
  );
}