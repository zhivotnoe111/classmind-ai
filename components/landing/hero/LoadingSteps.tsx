"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  "Understanding classroom context",
  "Retrieving memory from lessons",
  "Building personalized strategy",
];

export default function LoadingSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (currentStep >= steps.length) {
      const timer = setTimeout(() => setFinished(true), 800);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 1600);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="space-y-4 mt-6">
      
      {/* HEADER STATE */}
      <div className="flex items-center gap-3 mb-4">
        <Brain className="text-indigo-600" size={18} />
        <p className="text-sm font-medium text-zinc-700">
          AI Memory Engine
        </p>
      </div>

      {/* STEPS */}
      {steps.map((step, index) => {
        const completed = index < currentStep;
        const active = index === currentStep && !finished;

        return (
          <motion.div
            key={step}
            layout
            className="flex items-center gap-4 rounded-xl border border-zinc-100 bg-white px-4 py-3 shadow-sm"
          >
            {/* ICON */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50">
              {completed ? (
                <Check size={16} className="text-green-500" />
              ) : active ? (
                <Loader2 size={16} className="animate-spin text-indigo-600" />
              ) : (
                <div className="h-2 w-2 rounded-full bg-zinc-300" />
              )}
            </div>

            {/* TEXT */}
            <div className="flex flex-col">
              <span
                className={`text-sm font-medium transition-colors ${
                  completed
                    ? "text-zinc-900"
                    : active
                    ? "text-zinc-800"
                    : "text-zinc-400"
                }`}
              >
                {step}
              </span>

              {/* LIVE DOTS */}
              {active && (
                <motion.div className="mt-1 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: i * 0.2,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* FINAL STATE */}
      <AnimatePresence>
        {finished && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-5 py-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
              <Check className="text-green-600" size={18} />
            </div>

            <div>
              <p className="font-medium text-green-800">
                Memory Updated
              </p>
              <p className="text-sm text-green-600">
                Lessons are now personalized for this class.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}