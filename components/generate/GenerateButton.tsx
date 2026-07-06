"use client";

import { Sparkles } from "lucide-react";

interface GenerateButtonProps {
  onGenerate: () => void;
}

export default function GenerateButton({
  onGenerate,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onGenerate}
      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-5 text-lg font-semibold text-white transition hover:bg-indigo-700"
    >
      <Sparkles className="h-5 w-5" />

      Generate Lesson
    </button>
  );
}