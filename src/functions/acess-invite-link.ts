import { db } from '../drizzle/client'
import { subscriptions } from '../drizzle/schema/subscriptions'
import { redis } from '../redis/client'

interface AcessInviteLinkParams {
  subscriberId: string
}

export async function AcessInviteLink({ subscriberId }: AcessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
