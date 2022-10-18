import {
  StyleSheet,
  TouchableOpacity,
  ButtonProps,
  TextStyle,
  StyleProp,
} from 'react-native'

import { AtText } from '../AtText/AtText'
import { theme } from 'utils'

interface StyledButtonProps {
  title: string
  disabled?: boolean
  style?: StyleProp<TextStyle>
  styleText?: StyleProp<TextStyle>
}

export function AtButton({
  title,
  disabled = false,
  style,
  styleText,
  ...props
}: StyledButtonProps & ButtonProps) {
  const buttonStyles = [styles.container, disabled && styles.disabled, style]
  const textStyles = [styles.text, styleText]
  return (
    <TouchableOpacity style={buttonStyles} disabled={disabled} {...props}>
      <AtText fontWeight="bold" fontSize="subheading" style={textStyles}>
        {title}
      </AtText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: theme.measures.radius,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: theme.colors.white,
    textAlign: 'center',
  },
})
