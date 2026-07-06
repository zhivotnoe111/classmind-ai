import { Sparkles } from "lucide-react";

export default function WelcomeStep() {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">

        <Sparkles className="h-10 w-10 text-indigo-600" />

      </div>

      <h1 className="mt-8 text-4xl font-bold">
        Welcome to ClassMind
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
        Lets spend one minute setting up your classroom.
        After this, ClassMind will personalize every lesson
        for your students.
      </p>

    </div>
  );
}