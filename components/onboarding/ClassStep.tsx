"use client";

import { OnboardingData } from "@/types/onboarding";

interface ClassStepProps {
  formData: OnboardingData;
  setFormData: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function ClassStep({
  formData,
  setFormData,
}: ClassStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        Which class do you teach?
      </h2>

      <p className="mt-3 text-zinc-600">
        This helps ClassMind personalize lesson generation.
      </p>

      <div className="mt-10">
        <label className="mb-2 block font-medium">
          Class
        </label>

        <input
          value={formData.className}
          onChange={(e) =>
            setFormData({
              ...formData,
              className: e.target.value
            })
          }
          placeholder="Grade 8"
          className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
}