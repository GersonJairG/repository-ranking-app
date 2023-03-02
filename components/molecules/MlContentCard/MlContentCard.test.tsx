import { render } from '@testing-library/react-native'
import { RepositoryItemHeaderProps } from 'interfaces/Repository'
import { MlContentCard } from './MlContentCard'

describe('<MlContentCard />', () => {
  const defaultProps: RepositoryItemHeaderProps = {
    fullName: '',
    description: '',
    language: '',
    ownerAvatarUrl: '',
  }

  it('should correctly render the component', () => {
    const { getByTestId } = render(<MlContentCard {...defaultProps} />)
    const foundContentCard = getByTestId('ml-content-card')

    expect(foundContentCard).toBeDefined()
  })
})
