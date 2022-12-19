import { gql } from "@apollo/client";

export const GET_CATEGORIES_NAME = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query {
    category {
      name
      products {
        id
        name
        gallery
        inStock
        description
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          id
          name
          items {
            id
            displayValue
            value
          }
        }
      }
    }
  }
`;
// Queries for CategoryPage Data...
export const getCategoryProducts = (categoryTitle) => {
  const PRODUCTS = gql`
query {
  category(input: {title: "${categoryTitle}"}) {
    name
    products {
      id
      name
      brand
      inStock
      gallery
      attributes {
        name
        id
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          symbol
          label
        }
        amount
      }
    }
  }
}
`;
  return PRODUCTS;
};

export const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
