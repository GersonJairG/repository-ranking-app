import { render } from '@testing-library/react-native'
import { AtImage } from './AtImage'

describe('<AtImage />', () => {
  it('should correctly render the component', () => {
    const { getByTestId } = render(<AtImage />)
    const foundImage = getByTestId('at-image')

    expect(foundImage).toBeDefined()
  })

  it('should render the correct uri', () => {
    const exampleUri = 'this-is-a-example-uri'
    const { getByTestId } = render(<AtImage uri={exampleUri} />)
    const foundImage = getByTestId('at-image')
    expect(foundImage.props.source).toHaveProperty('uri', exampleUri)
  })
})
