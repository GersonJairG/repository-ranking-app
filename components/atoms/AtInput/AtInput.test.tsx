import { render } from "@testing-library/react-native"
import { AtInput } from "./AtInput"

describe('<AtInput />', () => {
  it('should correctly render the component', () => {
    const { getByTestId } = render(<AtInput />)
    const foundInput = getByTestId('at-input')
    expect(foundInput).toBeDefined()
  })
})