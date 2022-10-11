import { StyleSheet, View } from 'react-native'

import { RepositoryItemStatsProps } from 'interfaces/Repository'
import StyledText from 'lib/StyledText'

function parseThousands(value: number) {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : `${value}`
}

export default function RepositoryStats(props: RepositoryItemStatsProps) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText>Stars</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText>Forks</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">{props.reviewCount}</StyledText>
        <StyledText>Reviews</StyledText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <StyledText fontWeight="bold">{props.ratingAverage}</StyledText>
        <StyledText>Rating</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
