import { render } from '@testing-library/react-native'
import { AtButton } from './AtButton'

describe('AtButton... ', () => {
  it('it is rendering correctly.', () => {
    const { debug } = render(<AtButton title='TestButton' />)
    debug()
  })
})