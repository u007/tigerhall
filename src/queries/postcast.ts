import { gql } from '@apollo/client';

export const queryPodCasts = () => gql`
  query podCasts($limit: Int!, $keywords: String) {
    contentCards(filter: { limit: $limit, keywords: $keywords, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          id
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
