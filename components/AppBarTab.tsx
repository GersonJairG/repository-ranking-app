import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-native'
import StyledText from 'lib/StyledText'
import { StyleSheet, Text } from 'react-native'
import { theme } from 'lib/utils/theme'

interface AppBarTabProps {
  to: string
  children: ReactNode
}

export default function AppBarTab({ to, children }: AppBarTabProps) {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [styles.text, active && styles.active]
  return (
    <Link to={to} style={styles.container}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    borderRadius: 5,
    paddingHorizontal: 2,
  },
  text: {
    color: theme.appBar.textSecondary,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
})
