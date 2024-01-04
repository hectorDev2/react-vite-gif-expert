import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
describe('test a custom hooks', () => {
  test('should show check the results to hook', async () => {
    const { result } = renderHook(() => useFetchGifs('one piece'))

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))

    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })

  test('should  check the body of items', async () => {
    const { result } = renderHook(() => useFetchGifs('one piece'))
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const { images, isLoading } = result.current
    expect(images[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
