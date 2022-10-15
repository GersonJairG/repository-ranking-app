import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native'
import { theme } from 'utils'

interface StyledInputProps {
  style?: StyleProp<TextStyle>
  error?: boolean
}

export function AtInput({
  style,
  error = false,
  ...props
}: StyledInputProps & TextInputProps) {
  const inputStyle = [
    styles.input,
    style,
    error && styles.error
  ]
  return <TextInput style={inputStyle} {...props} />
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: theme.measures.radius,
    borderColor: '#999',
    padding: 10,
  },
  error: {
    borderColor: theme.colors.error,
  },
})
