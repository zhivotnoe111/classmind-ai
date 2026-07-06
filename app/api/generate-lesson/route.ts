import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const {
      topic,
      subject,
      className,
      objective,
      notes,
    } = await req.json();

    const completion = await ai.chat.completions.create({
      model: "openrouter/free",

      messages: [
        {
          role: "system",
          content: `
You are ClassMind AI.

You are an experienced professional teacher.

Return ONLY valid JSON.

The JSON MUST follow EXACTLY this structure:

{
  "lesson": {
    "title": "",
    "duration": "",
    "objective": "",
    "materials": "",

    "plan": [
      {
        "title": "",
        "duration": "",
        "teacher": "",
        "students": ""
      }
    ],

    "workedExamples": [
      {
        "question": "",
        "solution": "",
        "answer": ""
      }
    ],

    "teacherTips": "",

    "commonMistakes": ""
  },

  "worksheet": {
    "instructions": "",
    "questions": [
      "",
      "",
      "",
      "",
      ""
    ]
  },

  "quiz": [
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "correctAnswer": ""
    }
  ],

  "homework": {
    "instructions": "",
    "tasks": [
      "",
      "",
      ""
    ]
  },

  "answerKey": {
    "worksheet": [
      "",
      "",
      "",
      "",
      ""
    ],

    "homework": [
      "",
      "",
      ""
    ]
  }
}

Requirements:

Generate:

• Full 45-minute lesson

• 5 lesson stages

• Teacher actions

• Student activities

• 3 worked examples

• Worksheet with 5 questions

• Quiz with 5 questions

• Homework

• Teacher tips

• Common mistakes

• Answer key

Return ONLY JSON.

No markdown.

No explanations.

No code fences.
`,
        },

        {
          role: "user",
          content: `
Subject: ${subject}

Class: ${className}

Topic: ${topic}

Objective: ${objective}

Additional Notes: ${notes}
`,
        },
      ],
    });

    const text = completion.choices[0].message.content ?? "";

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      console.error(cleaned);

      return NextResponse.json(
        {
          error: "AI returned invalid JSON.",
          raw: cleaned,
        },
        {
          status: 500,
        }
      );
    }

    // ---------- Safe object ----------

    const lesson = {
      lesson: {
        title: parsed.lesson?.title ?? "",
        duration: parsed.lesson?.duration ?? "45 minutes",
        objective: parsed.lesson?.objective ?? "",
        materials: parsed.lesson?.materials ?? "",

        plan: parsed.lesson?.plan ?? [],

        workedExamples:
          parsed.lesson?.workedExamples ?? [],

        teacherTips:
          parsed.lesson?.teacherTips ?? "",

        commonMistakes:
          parsed.lesson?.commonMistakes ?? "",
      },

      worksheet: {
        instructions:
          parsed.worksheet?.instructions ?? "",

        questions:
          parsed.worksheet?.questions ?? [],
      },

      quiz:
        parsed.quiz ?? [],

      homework: {
        instructions:
          parsed.homework?.instructions ?? "",

        tasks:
          parsed.homework?.tasks ?? [],
      },

      answerKey: {
        worksheet:
          parsed.answerKey?.worksheet ?? [],

        homework:
          parsed.answerKey?.homework ?? [],
      },
    };

    return NextResponse.json(lesson);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}