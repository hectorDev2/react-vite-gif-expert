import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('test gifGrid', () => {
  useFetchGifs.mockReturnValue({
    images: [],
    loading: true
  })

  test('should be show loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category='One piece' />)

    expect(screen.getByText('One piece')).toBeTruthy()
    expect(screen.getByText('Cargando...')).toBeTruthy()
  })

  test('should be show items with images', () => {
    const gifs = [
      {
        title: 'One piece',
        id: '1',
        url: 'https://localhost:3001/one-piece.jpg'
      },
      {
        title: 'One piece 2',
        id: '2',
        url: 'https://localhost:3001/one-piece-2.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    render(<GifGrid category='One piece' />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
