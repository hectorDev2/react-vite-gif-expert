import { GifItem } from '../../components/GifItem'
const { render, screen } = require('@testing-library/react')
describe('test GifItem', () => {
  test('get a snapshots', () => {
    const { container } = render(
      <GifItem
        title='weed is love'
        url='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        id='123'
      />
    )

    expect(container).toMatchSnapshot()
  })

  test('check title and image render', () => {
    // Arrange
    const props = {
      title: 'Test Title',
      url: 'https://example.com/test.gif',
      id: '123'
    }

    // Act
    render(<GifItem {...props} />)

    // Assert
    // expect(screen.getByAltText('Test Title')).()
    expect(screen.getByAltText('Test Title')).toBeTruthy()
    expect(screen.getByRole('img').getAttribute('alt')).toBe(props.title)
  })

  // test('should not throw an error when id is null or undefined', () => {
  //   const props = {
  //     title: 'Test Title',
  //     url: 'https://example.com/test.gif',
  //     id: null
  //   }

  //   render(<GifItem {...props} />)
  // })

  test('should render a p tag with empty text', () => {
    const props = {
      title: null,
      url: 'https://example.com/test.gif',
      id: '1234 '
    }

    render(<GifItem {...props} />)
    expect(screen.getByTestId('title').innerHTML).toBe('')
  })
})
