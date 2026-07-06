import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCards from "../../components/dashboard/StatsCards";
import UpcomingClasses from "../../components/dashboard/UpcomingClasses";
import RecentMemory from "../../components/dashboard/RecentMemory";
import QuickActions from "../../components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <DashboardHeader />
        <StatsCards />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <UpcomingClasses />
          <RecentMemory />
        </div>

        <div className="mt-8">
          <QuickActions />
        </div>
      </main>
    </div>
  );
}