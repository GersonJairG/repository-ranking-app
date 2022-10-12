import { ReactNode } from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

import { theme } from 'utils'

type colors = 'primary' | 'secondary'
type fontSizes = 'body' | 'subheading'
type fontWeigths = 'normal' | 'bold'

interface StyledTextProps {
  children: ReactNode
  color?: colors
  fontSize?: fontSizes
  fontWeight?: fontWeigths
  style?: TextStyle | {}[]
}

export function AtText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...rest
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return <Text style={textStyles} {...rest}>{children}</Text>
}

const styles = StyleSheet.create({
  bold: { fontWeight: theme.fontWeights.bold },
  colorPrimary: { color: theme.colors.primary },
  colorSecondary: { color: theme.colors.textSecondary },
  subheading: { fontSize: theme.fontSizes.subheading  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
})
