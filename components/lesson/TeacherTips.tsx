import { GeneratedLesson } from "@/types/generatedLesson";

interface TeacherTipsProps {
  lesson: GeneratedLesson;
}

export default function TeacherTips({
  lesson,
}: TeacherTipsProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Teacher Tips
      </h2>

      <p className="mt-6 whitespace-pre-line">
        {lesson.lesson.teacherTips}
      </p>

    </div>
  );
}