import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { LoyaltyAuthForm } from "../components/loyalty-auth-form"

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect("/josue-kuta-barber/compte")
  return <LoyaltyAuthForm mode="sign-up" />
}
