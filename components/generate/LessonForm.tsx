"use client";

import { Dispatch, SetStateAction } from "react";
import { LessonFormData } from "@/types/lesson";

interface LessonFormProps {
  formData: LessonFormData;
  setFormData: Dispatch<SetStateAction<LessonFormData>>;
}

export default function LessonForm({
  formData,
  setFormData,
}: LessonFormProps) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-semibold">
        Lesson Details
      </h2>

      <div className="space-y-6">

        {/* Class */}

        <div>
          <label className="mb-2 block font-medium">
            Class
          </label>

          <select
            value={formData.className}
            onChange={(e) =>
              setFormData({
                ...formData,
                className: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option value="">Select class</option>
            <option>Mathematics 8B</option>
            <option>Physics 10A</option>
            <option>History 7C</option>
          </select>
        </div>

        {/* Subject */}

        <div>
          <label className="mb-2 block font-medium">
            Subject
          </label>

          <select
            value={formData.subject}
            onChange={(e) =>
              setFormData({
                ...formData,
                subject: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option value="">Select subject</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>History</option>
          </select>
        </div>

        {/* Topic */}

        <div>
          <label className="mb-2 block font-medium">
            Lesson Topic
          </label>

          <input
            value={formData.topic}
            onChange={(e) =>
              setFormData({
                ...formData,
                topic: e.target.value,
              })
            }
            placeholder="Quadratic equations"
            className="w-full rounded-xl border p-4"
          />
        </div>

        {/* Objective */}

        <div>
          <label className="mb-2 block font-medium">
            Learning Objective
          </label>

          <textarea
            rows={4}
            value={formData.objective}
            onChange={(e) =>
              setFormData({
                ...formData,
                objective: e.target.value,
              })
            }
            placeholder="Students will understand..."
            className="w-full rounded-xl border p-4"
          />
        </div>

        {/* Notes */}

        <div>
          <label className="mb-2 block font-medium">
            Additional Notes
          </label>

          <textarea
            rows={4}
            value={formData.notes}
            onChange={(e) =>
              setFormData({
                ...formData,
                notes: e.target.value,
              })
            }
            placeholder="Optional..."
            className="w-full rounded-xl border p-4"
          />
        </div>

      </div>
    </div>
  );
}