"use client";

import { Dispatch, SetStateAction } from "react";
import { OnboardingData } from "@/types/onboarding";

interface CountryStepProps {
  formData: OnboardingData;
  setFormData: Dispatch<SetStateAction<OnboardingData>>;
}

export default function CountryStep({
  formData,
  setFormData,
}: CountryStepProps) {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">
        Where is your school located?
      </h2>

      <p className="mt-3 text-zinc-600">
        This helps ClassMind understand your educational system.
      </p>

      <div className="mt-10">
        <label className="mb-2 block font-medium">
          Country
        </label>

        <select
          value={formData.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              country: e.target.value,
            })
          }
          className="w-full rounded-xl border border-zinc-300 p-4 outline-none focus:border-indigo-500"
        >
          <option value="">Select a country...</option>

          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>France</option>
          <option>Spain</option>
          <option>Italy</option>
          <option>Poland</option>
          <option>Ukraine</option>
          <option>Kazakhstan</option>
          <option>Australia</option>
        </select>
      </div>
    </div>
  );
}