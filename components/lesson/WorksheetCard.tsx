import { GeneratedLesson } from "@/types/generatedLesson";

interface WorksheetCardProps {
  lesson: GeneratedLesson;
}

export default function WorksheetCard({
  lesson,
}: WorksheetCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Worksheet
      </h2>

      <div className="mt-6">
        <p className="font-semibold">
          Instructions
        </p>

        <p className="mt-2">
          {lesson.worksheet.instructions}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {lesson.worksheet.questions.map((question, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-200 p-5"
          >
            <p className="font-semibold">
              Question {index + 1}
            </p>

            <p className="mt-2">
              {question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}