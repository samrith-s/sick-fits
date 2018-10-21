import gql from 'graphql-tag';

export const ALL_ITEMS = gql`
  query ALL_ITEMS {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
