import { getGifs } from '../../helpers/getGifs'
describe('test get gif', () => {
  test('fetch data', async () => {
    const gifs = await getGifs('One Punch')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
