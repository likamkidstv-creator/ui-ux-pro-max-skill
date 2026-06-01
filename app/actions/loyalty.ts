"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { loyaltyAccount, loyaltyVisit } from "@/lib/db/schema"
import { and, desc, eq } from "drizzle-orm"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"

const STAMPS_PER_REWARD = 10

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  return session.user.id
}

/** Returns the current user's loyalty account, creating one on first access. */
export async function getLoyaltyAccount() {
  const userId = await getUserId()

  const existing = await db
    .select()
    .from(loyaltyAccount)
    .where(eq(loyaltyAccount.userId, userId))
    .limit(1)

  if (existing.length > 0) return existing[0]

  const [created] = await db
    .insert(loyaltyAccount)
    .values({ userId })
    .returning()

  return created
}

/** Returns the user's recent visit history (most recent first). */
export async function getLoyaltyVisits() {
  const userId = await getUserId()
  return db
    .select()
    .from(loyaltyVisit)
    .where(eq(loyaltyVisit.userId, userId))
    .orderBy(desc(loyaltyVisit.createdAt))
    .limit(20)
}

/**
 * Records a new visit (a "stamp"). Every 10th stamp resets the card and grants
 * a free cut. Used by the client to simulate earning stamps in the demo.
 */
export async function addStamp(label = "Coupe") {
  const userId = await getUserId()
  const account = await getLoyaltyAccount()

  await db.insert(loyaltyVisit).values({ userId, label })

  let stamps = account.stamps + 1
  let freeCutsEarned = account.freeCutsEarned
  if (stamps >= STAMPS_PER_REWARD) {
    stamps = 0
    freeCutsEarned += 1
  }

  const [updated] = await db
    .update(loyaltyAccount)
    .set({
      stamps,
      totalCuts: account.totalCuts + 1,
      freeCutsEarned,
      updatedAt: new Date(),
    })
    .where(and(eq(loyaltyAccount.id, account.id), eq(loyaltyAccount.userId, userId)))
    .returning()

  revalidatePath("/josue-kuta-barber/compte")
  return updated
}

/** Activates or changes the user's subscription plan. */
export async function setLoyaltyPlan(plan: "free" | "fresh" | "vip") {
  const userId = await getUserId()
  const account = await getLoyaltyAccount()

  const [updated] = await db
    .update(loyaltyAccount)
    .set({
      plan,
      planStatus: plan === "free" ? "inactive" : "active",
      updatedAt: new Date(),
    })
    .where(and(eq(loyaltyAccount.id, account.id), eq(loyaltyAccount.userId, userId)))
    .returning()

  revalidatePath("/josue-kuta-barber/compte")
  return updated
}
