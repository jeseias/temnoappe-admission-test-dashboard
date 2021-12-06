import { screen, render } from '@test-utils'
import { Header } from '.'


const makeSut = () => render(<Header />)

describe('Header Component', () => {
  it('Should render header as expected', () => {
    makeSut()
    screen.debug()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('Should route to homepage', () => {
    makeSut()

  })
})
