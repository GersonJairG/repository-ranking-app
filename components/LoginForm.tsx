import { View, Button, StyleSheet, TextInputProps } from 'react-native'
import { Formik, useField } from 'formik'

import StyledInput from 'lib/StyledInput'
import StyledText from 'lib/StyledText'
import StyledButton from 'lib/StyledButton'
import { LoginValidationSchema } from 'schemas/LoginValidationSchema'

type namesInput = 'email' | 'password'

interface FormikProps {
  email: string
  password: string
}

interface FormikInputProps {
  name: namesInput
}

const initialValues = {
  email: '',
  password: '',
}

function FormikInputValue({
  name,
  ...props
}: FormikInputProps & TextInputProps) {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledInput
        value={field.value}
        onChangeText={helpers.setValue}
        error={!!meta.error}
        {...props}
      />
      {meta.error && (
        <StyledText style={styles.textError}>{meta.error}</StyledText>
      )}
    </>
  )
}

export default function LoginForm() {
  function submit(values: FormikProps) {
    console.log(values)
  }
  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={initialValues}
      onSubmit={submit}
    >
      {({ handleSubmit, isValid }) => (
        <View style={styles.form}>
          <FormikInputValue
            name="email"
            placeholder="Email"
            style={styles.input}
          />
          <FormikInputValue
            name="password"
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
          <StyledButton
            title="Iniciar sesión"
            disabled={!isValid}
            onPress={() => handleSubmit()}
            style={styles.loginButton}
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: 2,
  },
  textError: {
    color: 'red',
    fontSize: 13,
  },
  loginButton: {
    marginVertical: 10,
  },
})
