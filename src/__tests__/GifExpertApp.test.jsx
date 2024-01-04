import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../GifExpertApp'

describe('test main ExpertApp', () => {
  test('test exist title', () => {
    render(<GifExpertApp />)
    expect(screen.getByText('GifExpertApp')).toBeTruthy()
    expect(screen.findByRole('heading', { level: 1 })).toBeTruthy()
  })
})
