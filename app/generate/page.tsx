"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";

import GenerateHeader from "@/components/generate/GenerateHeader";
import LessonForm from "@/components/generate/LessonForm";
import MemoryPreview from "@/components/generate/MemoryPreview";
import GenerateButton from "@/components/generate/GenerateButton";
import GeneratingOverlay from "@/components/generate/GeneratingOverlay";

import { LessonFormData } from "@/types/lesson";

export default function GeneratePage() {
  const router = useRouter();

  const [lessonData, setLessonData] =
    useState<LessonFormData>({
      className: "",
      subject: "",
      topic: "",
      objective: "",
      notes: "",
    });

  const [isGenerating, setIsGenerating] = useState(false);

  async function handleGenerate() {
    try {
      setIsGenerating(true);

      const response = await fetch(
        "/api/generate-lesson",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            className: lessonData.className,
            subject: lessonData.subject,
            topic: lessonData.topic,
            objective: lessonData.objective,
            notes: lessonData.notes,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      sessionStorage.setItem(
        "generatedLesson",
        JSON.stringify(data)
      );

      router.push("/lesson");
    } catch (error) {
      console.error(error);

      alert("Lesson generation failed.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <GenerateHeader />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <LessonForm
            formData={lessonData}
            setFormData={setLessonData}
          />

          <MemoryPreview />
        </div>

        <div className="mt-8">
          <GenerateButton
            onGenerate={handleGenerate}
          />
        </div>
      </main>

      {isGenerating && (
        <GeneratingOverlay />
      )}
    </div>
  );
}