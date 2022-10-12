import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native'

interface StyledInputProps {
  style?: StyleProp<TextStyle>
  error?: boolean
}

export default function StyledInput({
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
    borderRadius: 5,
    borderColor: '#999',
    padding: 10,
  },
  error: {
    borderColor: 'red',
  },
})
