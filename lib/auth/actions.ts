"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getAppOrigin } from "@/lib/auth/redirect"

function getString(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function toAuthRedirect(path: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams(params)
  return `${path}?${searchParams.toString()}`
}

export async function signInAction(formData: FormData) {
  const supabase = await createClient()

  if (!supabase) {
    redirect(toAuthRedirect("/sign-in", { error: "Supabase is not configured for this app." }))
  }

  const email = getString(formData, "email")
  const password = getString(formData, "password")

  if (!email || !password) {
    redirect(toAuthRedirect("/sign-in", { error: "Email and password are required." }))
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    redirect(toAuthRedirect("/sign-in", { error: error.message }))
  }

  redirect("/account")
}

export async function signUpAction(formData: FormData) {
  const supabase = await createClient()

  if (!supabase) {
    redirect(toAuthRedirect("/sign-up", { error: "Supabase is not configured for this app." }))
  }

  const fullName = getString(formData, "full_name")
  const email = getString(formData, "email")
  const password = getString(formData, "password")
  const confirmPassword = getString(formData, "confirm_password")

  if (!fullName || !email || !password) {
    redirect(toAuthRedirect("/sign-up", { error: "Name, email, and password are required." }))
  }

  if (password.length < 8) {
    redirect(toAuthRedirect("/sign-up", { error: "Password must be at least 8 characters." }))
  }

  if (password !== confirmPassword) {
    redirect(toAuthRedirect("/sign-up", { error: "Passwords do not match." }))
  }

  const origin = await getAppOrigin()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    redirect(toAuthRedirect("/sign-up", { error: error.message }))
  }

  redirect(toAuthRedirect("/sign-in", {
    message: "Account created. Check your email to verify your account, then sign in.",
  }))
}

export async function signOutAction() {
  const supabase = await createClient()

  if (supabase) {
    await supabase.auth.signOut()
  }

  redirect("/sign-in")
}

export async function updateProfileAction(formData: FormData) {
  const supabase = await createClient()

  if (!supabase) {
    redirect(toAuthRedirect("/account", { error: "Supabase is not configured for this app." }))
  }

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/sign-in")
  }

  const fullName = getString(formData, "full_name")
  const phone = getString(formData, "phone")

  if (!fullName) {
    redirect(toAuthRedirect("/account", { error: "Full name is required." }))
  }

  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName, phone })
    .eq("id", user.id)

  if (error) {
    redirect(toAuthRedirect("/account", { error: error.message }))
  }

  redirect(toAuthRedirect("/account", { message: "Profile updated." }))
}

export async function updatePasswordAction(formData: FormData) {
  const supabase = await createClient()

  if (!supabase) {
    redirect(toAuthRedirect("/account", { error: "Supabase is not configured for this app." }))
  }

  const password = getString(formData, "password")
  const confirmPassword = getString(formData, "confirm_password")

  if (password.length < 8) {
    redirect(toAuthRedirect("/account", { error: "Password must be at least 8 characters." }))
  }

  if (password !== confirmPassword) {
    redirect(toAuthRedirect("/account", { error: "Passwords do not match." }))
  }

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    redirect(toAuthRedirect("/account", { error: error.message }))
  }

  redirect(toAuthRedirect("/account", { message: "Password updated." }))
}

export async function updatePreferencesAction(formData: FormData) {
  const supabase = await createClient()

  if (!supabase) {
    redirect(toAuthRedirect("/account", { error: "Supabase is not configured for this app." }))
  }

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect("/sign-in")
  }

  const preferences = {
    order_updates: formData.get("order_updates") === "on",
    promotional_emails: formData.get("promotional_emails") === "on",
    product_reviews: formData.get("product_reviews") === "on",
  }

  const { error } = await supabase
    .from("profiles")
    .update({ preferences })
    .eq("id", user.id)

  if (error) {
    redirect(toAuthRedirect("/account", { error: error.message }))
  }

  redirect(toAuthRedirect("/account", { message: "Preferences saved." }))
}
