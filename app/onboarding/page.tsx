"use client";

import { useState } from "react";

import { OnboardingData } from "@/types/onboarding";

import ProgressBar from "@/components/onboarding/ProgressBar";

import WelcomeStep from "@/components/onboarding/WelcomeStep";
import CountryStep from "@/components/onboarding/CountryStep";
import SchoolStep from "@/components/onboarding/SchoolStep";
import ClassStep from "@/components/onboarding/ClassStep";
import StudentsStep from "@/components/onboarding/StudentsStep";
import SubjectStep from "@/components/onboarding/SubjectStep";
import KnowledgeStep from "@/components/onboarding/KnowledgeStep";
import FeaturesStep from "@/components/onboarding/FeaturesStep";
import FinishStep from "@/components/onboarding/FinishStep";

export default function OnboardingPage() {
  // Какой экран сейчас открыт
  const [step, setStep] = useState(0);

  // Все данные, введённые пользователем
  const [formData, setFormData] = useState<OnboardingData>({
    country: "",
    school: "",
    className: "",
    students: "",
    subject: "",
    level: "",
    features: [],
  });

  // Все экраны онбординга
  const steps = [
    <WelcomeStep key="welcome" />,

    <CountryStep
      key="country"
      formData={formData}
      setFormData={setFormData}
    />,

    <SchoolStep
      key="school"
      formData={formData}
      setFormData={setFormData}
    />,

    <ClassStep
      key="class"
      formData={formData}
      setFormData={setFormData}
    />,

    <StudentsStep
      key="students"
      formData={formData}
      setFormData={setFormData}
    />,

    <SubjectStep
      key="subject"
      formData={formData}
      setFormData={setFormData}
    />,

    <KnowledgeStep
      key="knowledge"
      formData={formData}
      setFormData={setFormData}
    />,

    <FeaturesStep
      key="features"
      formData={formData}
      setFormData={setFormData}
    />,

    <FinishStep
      key="finish"
      formData={formData}
    />,
  ];

  function nextStep() {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 p-8">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <ProgressBar
          current={step}
          total={steps.length}
        />

        <div className="mt-10">
          {steps[step]}
        </div>

        <div className="mt-12 flex justify-between">

          <button
            onClick={previousStep}
            disabled={step === 0}
            className="rounded-xl border px-6 py-3 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>

          {step !== steps.length - 1 && (
            <button
              onClick={nextStep}
              className="rounded-xl bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
            >
              Continue
            </button>
          )}

        </div>

      </div>
    </main>
  );
}