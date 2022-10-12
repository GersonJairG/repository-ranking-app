import { StyleSheet, View } from 'react-native'

import { AtText } from 'components/atoms'
import { RepositoryItemStatsProps } from 'interfaces/Repository'

function parseThousands(value: number) {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : `${value}`
}

export function MlStatsCard(props: RepositoryItemStatsProps) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <AtText fontWeight="bold">
          {parseThousands(props.stargazersCount)}
        </AtText>
        <AtText>Stars</AtText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <AtText fontWeight="bold">
          {parseThousands(props.forksCount)}
        </AtText>
        <AtText>Forks</AtText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <AtText fontWeight="bold">{props.reviewCount}</AtText>
        <AtText>Reviews</AtText>
      </View>
      <View style={{ alignItems: 'center' }}>
        <AtText fontWeight="bold">{props.ratingAverage}</AtText>
        <AtText>Rating</AtText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
