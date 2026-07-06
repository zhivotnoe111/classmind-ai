import Sidebar from "@/components/dashboard/Sidebar";

import ClassroomHeader from "@/components/classroom/ClassroomHeader";
import GenerateLessonCard from "@/components/classroom/GenerateLessonCard";
import ClassroomInsights from "@/components/classroom/ClassroomInsights";
import LessonHistory from "@/components/classroom/LessonHistory";
import MemorySummary from "@/components/classroom/MemorySummary";

export default function ClassroomPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <ClassroomHeader />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <GenerateLessonCard />
          <ClassroomInsights />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <LessonHistory />
          <MemorySummary />
        </div>
      </main>
    </div>
  );
}