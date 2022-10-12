import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ButtonProps,
  TextStyle,
  StyleProp,
} from 'react-native'

import { theme } from 'utils'

interface StyledButtonProps {
  title: string
  disabled?: boolean
  style: StyleProp<TextStyle>
}

export function AtButton({
  title,
  disabled = false,
  style,
  ...props
}: StyledButtonProps & ButtonProps) {
  const buttonStyles = [styles.container, disabled && styles.disabled, style]
  return (
    <TouchableOpacity style={buttonStyles} disabled={disabled} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: theme.button.textPrimary,
    fontSize: theme.fontSizes.big,
  },
})
