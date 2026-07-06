"use client";

import { OnboardingData } from "@/types/onboarding";

interface FeaturesStepProps {
  formData: OnboardingData;
  setFormData: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function FeaturesStep({
  formData,
  setFormData,
}: FeaturesStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        What interests you most?
      </h2>

      <textarea
        value={formData.features.join(", ")}
        onChange={(e) =>
          setFormData({
            ...formData,
            features: e.target.value
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),
          })
        }
        placeholder="AI Lessons, Homework Generator..."
        className="mt-8 h-40 w-full rounded-xl border border-zinc-300 p-4"
      />
    </div>
  );
}