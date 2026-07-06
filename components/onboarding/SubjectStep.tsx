"use client";

import { OnboardingData } from "@/types/onboarding";

interface StudentsStepProps {
  formData: OnboardingData;
  setFormData: React.Dispatch<
    React.SetStateAction<OnboardingData>
  >;
}

export default function StudentsStep({
  formData,
  setFormData,
}: StudentsStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        Tell us about your students
      </h2>

      <p className="mt-3 text-zinc-600">
        Approximately how many students are in your class?
      </p>

      <div className="mt-10">
        <label className="mb-2 block font-medium">
          Number of students
        </label>

        <input
          type="number"
          min="1"
          value={formData.students}
          onChange={(e) =>
            setFormData({
              ...formData,
              students:
                e.target.value === ""
                  ? ""
                  : Number(e.target.value),
            })
          }
          placeholder="25"
          className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
}