"use client";

import { OnboardingData } from "@/types/onboarding";

interface KnowledgeStepProps {
  formData: OnboardingData;
  setFormData: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function KnowledgeStep({
  formData,
  setFormData,
}: KnowledgeStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        Your teaching experience
      </h2>

      <input
        value={formData.level}
        onChange={(e) =>
          setFormData({
            ...formData,
            level: e.target.value,
          })
        }
        placeholder="5 years"
        className="mt-8 w-full rounded-xl border border-zinc-300 p-4"
      />
    </div>
  );
}