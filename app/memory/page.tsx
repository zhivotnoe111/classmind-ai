import Sidebar from "@/components/dashboard/Sidebar";

import MemoryHeader from "@/components/memory/MemoryHeader";
import MemorySearch from "@/components/memory/MemorySearch";
import MemoryList from "@/components/memory/MemoryList";

export default function MemoryPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <MemoryHeader />

        <div className="mt-8">
          <MemorySearch />
        </div>

        <div className="mt-8">
          <MemoryList />
        </div>
      </main>
    </div>
  );
}