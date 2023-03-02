import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'

import { AtText } from 'components/atoms'
import { theme } from 'utils'

interface AppBarTabProps {
  to: string
  children: ReactNode
}

export function MlTab({ to, children }: AppBarTabProps) {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [styles.text, active && styles.active]
  return (
    <Link to={to} style={styles.container}>
      <AtText fontWeight="bold" style={textStyles}>
        {children}
      </AtText>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    borderRadius: theme.measures.radius,
    paddingHorizontal: 5,
  },
  text: {
    color: theme.appBar.textSecondary,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
})
