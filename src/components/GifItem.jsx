import PropTypes from 'prop-types' // ES6

export const GifItem = ({ title, url, id }) => {
  return (
    <div className='card' aria-label='card'>
      <img src={url} alt={title} />
      <h3 data-testid='title'>{title ? title : ''}</h3>
    </div>
  )
}
GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
