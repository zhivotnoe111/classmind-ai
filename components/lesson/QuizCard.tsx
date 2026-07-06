import { GeneratedLesson } from "@/types/generatedLesson";

interface QuizCardProps {
  lesson: GeneratedLesson;
}

export default function QuizCard({
  lesson,
}: QuizCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Quick Quiz
      </h2>

      <div className="mt-8 space-y-8">

        {lesson.quiz.map((question, index) => (

          <div key={index}>

            <p className="font-semibold">
              {index + 1}. {question.question}
            </p>

            <div className="mt-4 space-y-2">

              {question.options.map((option, i) => (

                <div
                  key={i}
                  className="rounded-xl border border-zinc-200 p-3"
                >
                  {option}
                </div>

              ))}

            </div>

            <p className="mt-4 text-green-600 font-medium">
              Correct answer:
              {" "}
              {question.correctAnswer}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}