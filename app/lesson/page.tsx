"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";

import LessonHeader from "@/components/lesson/LessonHeader";
import LessonOverview from "@/components/lesson/LessonOverview";
import LessonPlan from "@/components/lesson/LessonPlan";
import HomeworkCard from "@/components/lesson/HomeworkCard";
import WorkedExamples from "@/components/lesson/WorkedExamples";
import WorksheetCard from "@/components/lesson/WorksheetCard";
import QuizCard from "@/components/lesson/QuizCard";
import TeacherTips from "@/components/lesson/TeacherTips";
import CommonMistakes from "@/components/lesson/CommonMistakes";
import ExportButtons from "@/components/lesson/ExportButtons";

import { GeneratedLesson } from "@/types/generatedLesson";

export default function LessonPage() {
  const [lesson, setLesson] =
    useState<GeneratedLesson | null>(null);

  useEffect(() => {
    const storedLesson =
      sessionStorage.getItem("generatedLesson");

    if (storedLesson) {
      setLesson(JSON.parse(storedLesson));
    }
  }, []);

  if (!lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="rounded-3xl bg-white p-10 shadow-xl text-center">

          <h1 className="text-3xl font-bold">
            No Lesson Found
          </h1>

          <p className="mt-4 text-zinc-500">
            Generate a lesson first.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="flex-1 p-8">

        <LessonHeader />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <LessonOverview lesson={lesson} />

          <HomeworkCard lesson={lesson} />

        </div>

        <div className="mt-8">
          <LessonPlan lesson={lesson} />
        </div>

        <div className="mt-8">
          <WorkedExamples lesson={lesson} />
        </div>

        <div className="mt-8">
          <WorksheetCard lesson={lesson} />
        </div>

        <div className="mt-8">
          <QuizCard lesson={lesson} />
        </div>

        <div className="mt-8">
          <TeacherTips lesson={lesson} />
        </div>

        <div className="mt-8">
          <CommonMistakes lesson={lesson} />
        </div>

        <div className="mt-8">
          <ExportButtons />
        </div>

      </main>
    </div>
  );
}