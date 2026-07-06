export interface LessonStep {
  title: string;
  duration: string;
  teacher: string;
  students: string;
}

export interface WorkedExample {
  question: string;
  solution: string;
  answer: string;
}

export interface Worksheet {
  instructions: string;
  questions: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Homework {
  instructions: string;
  tasks: string[];
}

export interface AnswerKey {
  worksheet: string[];
  homework: string[];
}

export interface Lesson {
  title: string;
  duration: string;
  objective: string;
  materials: string;

  plan: LessonStep[];

  workedExamples: WorkedExample[];

  teacherTips: string;

  commonMistakes: string;
}

export interface GeneratedLesson {
  lesson: Lesson;

  worksheet: Worksheet;

  quiz: QuizQuestion[];

  homework: Homework;

  answerKey: AnswerKey;
}