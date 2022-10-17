import { fireEvent, render } from '@testing-library/react-native'
import { AuthenticateInput } from 'interfaces/graphql'
import { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'

interface FormProps {
  onSubmit: ({ username, password }: AuthenticateInput) => void
}

function Form({ onSubmit }: FormProps) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit() {
    onSubmit({ username, password })
  }

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <Form onSubmit={onSubmit} />
    )

    fireEvent.changeText(getByPlaceholderText('Username'), 'gersonjairg')
    fireEvent.changeText(getByPlaceholderText('Password'), 'password')
    fireEvent.press(getByText('Submit'))

    expect(onSubmit).toHaveBeenCalledTimes(1)

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'gersonjairg',
      password: 'password'
    })
  })
})
