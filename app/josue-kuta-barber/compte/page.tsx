import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { getLoyaltyAccount, getLoyaltyVisits } from "@/app/actions/loyalty"
import { LoyaltyDashboard } from "../components/loyalty-dashboard"

export default async function ComptePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/josue-kuta-barber/sign-in")

  const [account, visits] = await Promise.all([getLoyaltyAccount(), getLoyaltyVisits()])

  return (
    <LoyaltyDashboard
      name={session.user.name ?? "Frérot"}
      account={{
        stamps: account.stamps,
        totalCuts: account.totalCuts,
        freeCutsEarned: account.freeCutsEarned,
        plan: account.plan,
        planStatus: account.planStatus,
      }}
      visits={visits.map((v) => ({ id: v.id, label: v.label, createdAt: v.createdAt }))}
    />
  )
}
