import { fireEvent, render } from '@testing-library/react-native'
import { AtButton } from './AtButton'

describe('<AtButton /> ', () => {
  const fakeOnPress = jest.fn()

  afterEach(() => jest.clearAllMocks())

  it('should correctly render the component', () => {
    const { getByTestId } = render(<AtButton title="AtButton" />)
    const foundButton = getByTestId('at-button')

    expect(foundButton).toBeDefined()
  })

  it('should correctly render the title', () => {
    const { getByTestId } = render(<AtButton title="Title" />)
    const foundButton = getByTestId('at-button')

    // get the first child element to validate the content
    const atTextChild = foundButton.props.children[0]

    expect(atTextChild.props.children).toBe('Title')
  })

  it('the onPress property should work correctly', () => {
    const { getByTestId } = render(
      <AtButton title="Title" onPress={fakeOnPress} />
    )
    const foundButton = getByTestId('at-button')

    fireEvent.press(foundButton)

    expect(fakeOnPress).toBeCalledTimes(1)
  })

  it('the disabled property of the button should work correctly', () => {
    const { getByTestId } = render(<AtButton title="Title" disabled />)
    const foundButton = getByTestId('at-button')

    expect(foundButton).toBeDisabled()

    fireEvent.press(foundButton)
    expect(fakeOnPress).toBeCalledTimes(0)
  })
})
