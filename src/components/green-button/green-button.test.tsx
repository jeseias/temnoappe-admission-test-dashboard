import { screen, render, userEvent } from '@test-utils'
import { GreenButton } from '.'

describe('Green Button', () => {
  it('Should render given child', () => {
    render(<GreenButton>Child Component</GreenButton>)
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  it('Should accept clicks', () => {
    const fn = jest.fn()
    render(<GreenButton onClick={fn}>Child Component</GreenButton>)
    userEvent.click(screen.getByText('Child Component'))
    expect(fn).toHaveBeenCalled()
  })
})
