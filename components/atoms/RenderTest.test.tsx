import { render } from '@testing-library/react-native'
import { View, Text } from 'react-native'

interface GreetingProps {
  name: string
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  )
}

describe('Greeting test... ', () => {
  it('rendering a greeting message based on the name prop', () => {
    const { debug, getByText } = render(<Greeting name="Gerson" />)
    debug()

    expect(getByText('Hello Gerson!')).toBeDefined()
  })
})
