import { supabase } from "./supabase";

export async function createProfile(
  id: string,
  email: string
) {
  return await supabase
    .from("profiles")
    .insert({
      id,
      full_name: "",
      country: "",
      school: "",
    });
}

export async function getProfile(
  id: string
) {
  return await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();
}

export async function updateProfile(
  id: string,
  values: {
    full_name?: string;
    country?: string;
    school?: string;
  }
) {
  return await supabase
    .from("profiles")
    .update(values)
    .eq("id", id);
}