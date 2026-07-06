import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/hero/Hero";
import LoadingSteps from "@/components/landing/LoadingSteps/LoadingSteps";
import WhatClassMindRemembers from "@/components/landing/WhatClassMindRemembers/WhatClassMindRemembers";
import HowMemoryBecomesLesson from "@/components/landing/HowMemoryBecomesLesson/HowMemoryBecomesLesson";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LoadingSteps />
      <HowMemoryBecomesLesson />
      <WhatClassMindRemembers />
    </>
  );
}