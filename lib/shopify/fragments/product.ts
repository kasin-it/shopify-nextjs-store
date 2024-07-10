import { imageFragment } from "./image"
import { seoFragment } from "./seo"

const productFragment = `#graphql
  fragment singleProduct on Product {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    collections(first: 15) {
      nodes {
        handle
        title
        description
        updatedAt
        id
        descriptionHtml
        image {
          ...singleImage
        }
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          quantityAvailable
          availableForSale
          selectedOptions {
            name
            value
          }
          # price
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...singleImage
    }
    images(first: 20) {
      edges {
        node {
          ...singleImage
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    createdAt
      metafields(identifiers: [
              {namespace: "custom", key: "details"},
              {namespace: "custom", key: "delivery"},
              {namespace: "custom", key: "size_and_fit"},
            ]) {
              key
              value
              
              }
      }
  ${imageFragment}
  ${seoFragment}
`

export { productFragment }
