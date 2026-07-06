"use client";

import { OnboardingData } from "@/types/onboarding";

interface CountryStepProps {
  formData: OnboardingData;
  setFormData: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function CountryStep({
  formData,
  setFormData,
}: CountryStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        Where do you teach?
      </h2>

      <input
        value={formData.country}
        onChange={(e) =>
          setFormData({
            ...formData,
            country: e.target.value,
          })
        }
        placeholder="United Kingdom"
        className="mt-8 w-full rounded-xl border border-zinc-300 p-4"
      />
    </div>
  );
}