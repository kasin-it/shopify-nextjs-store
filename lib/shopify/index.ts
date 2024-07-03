import "server-only"
import {
  StorefrontApiClient,
  createStorefrontApiClient,
} from "@shopify/storefront-api-client"
import { createAdminApiClient } from "@shopify/admin-api-client"
import { PlatformCollection } from "./types"

export function createShopifyClient(shopName: string, accessToken: string) {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN || ""
  const privateAccessToken = process.env.SHOPIFY_PRIVATE_ACCESS_TOKEN || ""
  const adminAccessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || ""

  const client = createStorefrontApiClient({
    storeDomain,
    privateAccessToken: privateAccessToken || "",
    apiVersion: "2024-07",
    // customFetchApi: (url, init) => fetch(url, init as never) as never,
  })

  const adminClient = createAdminApiClient({
    storeDomain,
    accessToken: adminAccessToken || "",
    apiVersion: "2024-07",
  })

  // prettier-ignore
  return {
    // getMenu: async (handle?: string) => getMenu(client!, handle),
    // getProduct: async (id: string) => getProduct(client!, id),
    // getProductByHandle: async (handle: string) =>
    // getProductByHandle(client!, handle),
    // subscribeWebhook: async (topic: `${WebhookSubscriptionTopic}`,callbackUrl: string) => subscribeWebhook(adminClient, topic, callbackUrl),
    // createProductFeed: async () => createProductFeed(adminClient),
    // fullSyncProductFeed: async (id: string) =>
    // fullSyncProductFeed(adminClient, id),
    // getLatestProductFeed: async () => getLatestProductFeed(adminClient),
    // getPage: async (handle: string) => getPage(client!, handle),
    // getAllPages: async () => getAllPages(client!),
    // getProductStatus: async (id: string) => getProductStatus(adminClient!, id),
    // getAdminProduct: async (id: string) => getAdminProduct(adminClient, id),
    // createCart: async (items: PlatformItemInput[]) =>
    // createCart(client!, items),
    // createCartItem: async (cartId: string, items: PlatformItemInput[]) =>
    // createCartItem(client!, cartId, items),
    // updateCartItem: async (cartId: string, items: PlatformItemInput[]) =>
    // updateCartItem(client!, cartId, items),
    // deleteCartItem: async (cartId: string, itemIds: string[]) =>
    // deleteCartItem(client!, cartId, itemIds),
    // getCart: async (cartId: string) => getCart(client!, cartId),
    // getCollections: async (limit?: number) => getCollections(client!, limit),
    // getCollection: async (handle: string) => getCollection(client!, handle),
    // getCollectionById: async (id: string) => getCollectionById(client!, id),
    // createUser: async (input: PlatformUserCreateInput) =>
    // createUser(client!, input),
    // getUser: async (accessToken: string) => getUser(client!, accessToken),
    // updateUser: async (accessToken: string, input: Omit<PlatformUserCreateInput, "password">) => updateUser(client!, accessToken, input), createUserAccessToken: async (input: Pick<PlatformUserCreateInput, "password" | "email">) => createUserAccessToken(client!, input),
  }
}

// async function getCollection(
//   client: StorefrontApiClient,
//   handle: string
// ): Promise<PlatformCollection | undefined | null> {
//   const collection = await client.request<SingleCollectionQuery>(
//     getCollectionQuery,
//     { variables: { handle } }
//   )

//   return normalizeCollection(collection.data?.collection)
// }
