import { metaobjectFragment, productFragment } from "../fragments/product"

export const getProductsByIdsQuery = `#graphql
  query ProductsByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...on Product {
        ...singleProduct
      }  
    }
  }
  ${productFragment}
`

export const getProductsBySearchParamsQuery = `#graphql
query ProductsBySearchParams(
  $search: String
  $sortKey: ProductSortKeys
  $reverse: Boolean
  $numProducts: Int!
  $cursor: String
) {
  products(
    sortKey: $sortKey
    reverse: $reverse
    first: $numProducts
    after: $cursor
    query: $search
  ) {
    edges {
      node {
        ...singleProduct
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
${productFragment}
`

export const getMetaobjectsByIdQuery = `#graphql
  query MetaobjectsByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ...on Metaobject {
        ...singleMetaobject
      }  
    }
  }
  ${metaobjectFragment}
`

export const getProductsByCollectionQuery = `#graphql
  query ProductsByCollection($collectionHandle: String!, $limit: Int) {
    collection(handle: $collectionHandle) {
      products(first: $limit) {
        edges {
          node {
            ...singleProduct
          }
        }
      }  
    }
  }
  ${productFragment}
`

export const getProductsHandleQuery = `#graphql
    query ProductsHandle {
      products(first: 250) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `

// export const getProductsCategoriesQuery = `#graphql
//     query ProductsCategories {
//       products(first: 250) {
//         edges {
//           node {
//             category
//           }
//         }
//       }
//     }
//   `

export const getProductQuery = `#graphql
  query SingleProduct($id: ID!) {
    product(id: $id) {
      ...singleProduct
    }
  }
  ${productFragment}
`

export const getProductsByHandleQuery = `#graphql
  query ProductsByHandle($query: String!) {
    products(first: 1, query: $query) {
      edges {
        node {
          ...singleProduct
        }
      }
    }
  }
  ${productFragment}
`

export const getProductsQuery = `#graphql
  query Products($sortKey: ProductSortKeys, $reverse: Boolean, $query: String, $numProducts: Int!, $cursor: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: $numProducts, after: $cursor ) {
      edges {
        node {
          ...singleProduct
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${productFragment}
`

export const getProductRecommendationsQuery = `#graphql
  query ProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...singleProduct
    }
  }
  ${productFragment}
`
