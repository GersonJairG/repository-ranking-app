export interface RepositoryItemProps {
  id: string
  fullName: string
  description: string
  language: string
  forksCount: number
  stargazersCount: number
  ratingAverage: number
  reviewCount: number
  ownerAvatarUrl: string
}

export interface edgeRepository {
  node: () => RepositoryItemProps
}

export interface responseAPI {
  repositories: {
    totalCount: number
    edges: edgeRepository[]
  }
}

export interface RepositoryItemHeaderProps {
  fullName: string
  description: string
  language: string
  ownerAvatarUrl: string
}

export interface RepositoryItemStatsProps {
  forksCount: number
  stargazersCount: number
  ratingAverage: number
  reviewCount: number
}