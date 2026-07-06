"use client";

import MemoryCard from "./MemoryCard";

const memories = [
  {
    title: "Students struggled with fractions",
    description:
      "Several students had difficulty simplifying fractions during today's lesson.",
    date: "2 hours ago",
  },
  {
    title: "Excellent classroom discussion",
    description:
      "Group collaboration significantly improved engagement.",
    date: "Yesterday",
  },
  {
    title: "Homework completion increased",
    description:
      "Homework submission reached 91% this week.",
    date: "2 days ago",
  },
  {
    title: "Need more graph practice",
    description:
      "Students require additional exercises on plotting functions.",
    date: "Last week",
  },
];

export default function MemoryList() {
  return (
    <div className="grid gap-6">
      {memories.map((memory) => (
        <MemoryCard
          key={memory.title}
          {...memory}
        />
      ))}
    </div>
  );
}