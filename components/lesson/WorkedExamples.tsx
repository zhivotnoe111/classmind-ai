import { GeneratedLesson } from "@/types/generatedLesson";

interface WorkedExamplesProps {
  lesson: GeneratedLesson;
}

export default function WorkedExamples({
  lesson,
}: WorkedExamplesProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Worked Examples
      </h2>

      <div className="mt-8 space-y-6">

        {lesson.lesson.workedExamples.map((example, index) => (

          <div
            key={index}
            className="rounded-2xl border border-zinc-200 p-6"
          >

            <h3 className="font-semibold">
              Example {index + 1}
            </h3>

            <div className="mt-4">

              <p className="text-sm text-zinc-500">
                Question
              </p>

              <p className="mt-1 whitespace-pre-line">
                {example.question}
              </p>

            </div>

            <div className="mt-5">

              <p className="text-sm text-zinc-500">
                Solution
              </p>

              <p className="mt-1 whitespace-pre-line">
                {example.solution}
              </p>

            </div>

            <div className="mt-5">

              <p className="text-sm text-zinc-500">
                Answer
              </p>

              <p className="mt-1 font-semibold text-indigo-600">
                {example.answer}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}