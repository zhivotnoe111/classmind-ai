"use client";

import {
  Download,
  FileText,
  Save,
} from "lucide-react";

export default function ExportButtons() {
  return (
    <div className="grid gap-4 md:grid-cols-3">

      <button className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700">
        <Download className="h-5 w-5" />
        Export PDF
      </button>

      <button className="flex items-center justify-center gap-3 rounded-2xl border py-4 font-semibold transition hover:bg-zinc-100">
        <FileText className="h-5 w-5" />
        Export DOCX
      </button>

      <button className="flex items-center justify-center gap-3 rounded-2xl border py-4 font-semibold transition hover:bg-zinc-100">
        <Save className="h-5 w-5" />
        Save to Memory
      </button>

    </div>
  );
}