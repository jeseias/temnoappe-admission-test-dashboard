import { screen, render } from '@test-utils'
import { GreenButton } from '.'

const makeSut = () => render(<GreenButton>Child Component</GreenButton>)

describe('Green Button', () => {
  it('Should render given child', () => {
    makeSut()
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })
})
