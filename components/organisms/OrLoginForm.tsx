import { View, StyleSheet, TextInputProps, Alert } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Formik, useField } from 'formik'

import { AtButton, AtInput, AtText } from 'components/atoms'
import { AuthenticateInput } from 'interfaces/graphql'
import { LoginValidationSchema } from 'schemas/LoginValidationSchema'
import { useAuth } from 'contexts/AuthContext'

type namesInput = 'username' | 'password'

interface FormikInputProps {
  name: namesInput
}

const initialValues = {
  username: '',
  password: '',
}

function FormikInputValue({
  name,
  ...props
}: FormikInputProps & TextInputProps) {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  return (
    <>
      <AtInput
        value={field.value}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(true)}
        error={!!showError}
        autoCapitalize="none"
        {...props}
      />
      {!!showError && (
        <AtText color="error" fontSize="small">
          {meta.error}
        </AtText>
      )}
    </>
  )
}

export function OrLoginForm() {
  const navigate = useNavigate()
  const { signIn } = useAuth()

  async function submit(values: AuthenticateInput) {
    const { error } = await signIn(values)
    error && Alert.alert(error.split('Error:')[1])
    !error && navigate('/')
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
            name="username"
            placeholder="Username"
            style={styles.input}
          />
          <FormikInputValue
            name="password"
            placeholder="Password"
            keyboardType="visible-password"
            style={styles.input}
            secureTextEntry
          />
          <AtButton
            title="Sign in"
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
    marginHorizontal: 20,
    marginVertical: 15,
  },
  input: {
    marginTop: 10,
    marginBottom: 2,
  },
  loginButton: {
    marginVertical: 10,
  },
})
