import { productFragment } from "../fragments/product"

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
