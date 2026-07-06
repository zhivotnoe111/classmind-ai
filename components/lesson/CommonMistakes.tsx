import { GeneratedLesson } from "@/types/generatedLesson";

interface CommonMistakesProps {
  lesson: GeneratedLesson;
}

export default function CommonMistakes({
  lesson,
}: CommonMistakesProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Common Mistakes
      </h2>

      <p className="mt-6 whitespace-pre-line">
        {lesson.lesson.commonMistakes}
      </p>

    </div>
  );
}