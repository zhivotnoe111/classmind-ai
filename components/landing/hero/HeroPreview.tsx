"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BookOpen,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Classroom Preview
        </h3>

        <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          LIVE
        </div>
      </div>

      {/* Info */}

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-indigo-600" />
          <span>Math 8B</span>
        </div>

        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-indigo-600" />
          <span>26 students</span>
        </div>

        <div className="flex items-center gap-3">
          <Brain className="h-5 w-5 text-indigo-600" />
          <span>Memory Active</span>
        </div>

      </div>

      <div className="my-8 h-px bg-zinc-200" />

      {/* Pipeline */}

      <div className="space-y-5">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="flex items-center gap-3"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <span>Listening to classroom</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="flex items-center gap-3"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          <span>Building memory</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-3"
        >
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <span>Generating lesson...</span>
        </motion.div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm text-zinc-500">
          <span>Creating Progress</span>
          <span>86%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-200">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "86%" }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          />

        </div>

      </div>
    </motion.div>
  );
}