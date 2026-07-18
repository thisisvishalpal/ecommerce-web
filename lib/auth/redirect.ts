import { headers } from "next/headers"

export async function getAppOrigin() {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "")
  }

  const headerStore = await headers()
  const host = headerStore.get("host") ?? "localhost:3001"
  const protocol = headerStore.get("x-forwarded-proto") ?? "http"

  return `${protocol}://${host}`
}
