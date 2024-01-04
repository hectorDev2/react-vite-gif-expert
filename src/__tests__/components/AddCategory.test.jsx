import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'
describe('test add category', () => {
  test('check  change value input', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Goku' } })
    expect(input.value).toBe('Goku')
  })
})
