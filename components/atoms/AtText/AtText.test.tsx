import { render } from '@testing-library/react-native'
import { AtText } from './AtText'

describe('<AtInput />', () => {
  it('should correctly render the component', () => {
    const { getByTestId } = render(<AtText>Hi!</AtText>)
    const foundInput = getByTestId('at-text')
    expect(foundInput).toBeDefined()
  })

  it('should display the content correctly', () => {
    const { getByTestId } = render(<AtText>Hi!</AtText>)
    const foundInput = getByTestId('at-text')
    expect(foundInput).toHaveTextContent('Hi!')
  })

})
