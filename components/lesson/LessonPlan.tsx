import { GeneratedLesson } from "@/types/generatedLesson";

interface LessonPlanProps {
  lesson: GeneratedLesson;
}

export default function LessonPlan({
  lesson,
}: LessonPlanProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Lesson Plan
      </h2>

      <div className="mt-8 space-y-6">

        {lesson.lesson.plan.map((step, index) => (

          <div
            key={index}
            className="rounded-2xl border border-zinc-200 p-6"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold">
                {step.title}
              </h3>

              <span className="text-sm text-zinc-500">
                {step.duration}
              </span>

            </div>

            <div className="mt-5">

              <p className="text-sm font-semibold text-indigo-600">
                Teacher
              </p>

              <p className="mt-1 whitespace-pre-line">
                {step.teacher}
              </p>

            </div>

            <div className="mt-5">

              <p className="text-sm font-semibold text-green-600">
                Students
              </p>

              <p className="mt-1 whitespace-pre-line">
                {step.students}
              </p>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}