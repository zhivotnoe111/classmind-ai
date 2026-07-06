"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth";
import { createProfile } from "@/lib/database";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await signUp(
      email,
      password
    );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Check your email to confirm registration."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-xl border p-3"
          required
        />
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-white"
      >
        {loading
          ? "Creating account..."
          : "Create Account"}
      </button>
    </form>
  );
}