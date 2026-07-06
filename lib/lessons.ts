import { supabase } from "./supabase";
import { GeneratedLesson } from "@/types/generatedLesson";

export async function saveLesson(
  lesson: GeneratedLesson
) {
  const { data, error } = await supabase
    .from("lessons")
    .insert([
      {
        title: lesson.lesson.title,
        lesson,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getLesson(id: string) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data.lesson as GeneratedLesson;
}