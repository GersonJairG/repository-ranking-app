import { ReactNode } from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

import { theme } from 'utils'

type colors = 'primary' | 'secondary' | 'error'
type fontSizes = 'small' | 'body' | 'subheading' | 'big'
type fontWeigths = 'normal' | 'bold'

interface StyledTextProps {
  children: ReactNode
  color?: colors
  fontSize?: fontSizes
  fontWeight?: fontWeigths
  style?: StyleProp<TextStyle>
}

export function AtText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}: StyledTextProps) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'error' && styles.colorError,
    fontSize === 'small' && styles.small,
    fontSize === 'body' && styles.body,
    fontSize === 'subheading' && styles.subheading,
    fontSize === 'big' && styles.big,
    fontWeight === 'bold' && styles.bold,
    style,
  ]

  return (
    <Text style={textStyles} {...props} testID="at-text">
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  bold: { fontWeight: theme.fontWeights.bold },
  colorPrimary: { color: theme.colors.primary },
  colorSecondary: { color: theme.colors.textSecondary },
  colorError: { color: theme.colors.error },
  small: { fontSize: theme.fontSizes.small },
  body: { fontSize: theme.fontSizes.body },
  subheading: { fontSize: theme.fontSizes.subheading },
  big: { fontSize: theme.fontSizes.big },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
})
