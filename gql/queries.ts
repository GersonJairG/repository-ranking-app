import { gql } from 'apollo-boost'

export const GET_REPOSITORIES = gql`
query {
  repositories {
    egdes {
      node {
        id
        name
        ownerName
        createdAt
        fullName
        reviewCount
        ratingAverage
        forksCount
        stargazersCount
        description
        language
        ownerAvatarUrl
      }
    }
  }
}
`
