"use client";

import { OnboardingData } from "@/types/onboarding";

interface FinishStepProps {
  formData: OnboardingData;
}

export default function FinishStep({
  formData,
}: FinishStepProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-3xl font-bold">
        Youre all set!
      </h2>

      <p className="mt-6 text-zinc-600">
        Welcome to ClassMind AI.
      </p>
    </div>
  );
}