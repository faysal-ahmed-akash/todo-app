import PropTypes from 'prop-types'

const Search = ({
  searchText,
  setSearchText,
  completeList,
  incompleteList,
}) => {
  const searchHandler = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div>
      {incompleteList.length > 0 || completeList.length > 0 ? (
        <div className='search-container'>
          <input
            type='text'
            name='search'
            value={searchText}
            placeholder='search here...'
            className='search'
            onChange={searchHandler}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

Search.defaultProps = {
  searchText: '',
  setSearchText: () => {},
  completeList: [{ name: '', checked: false, isEdit: false, id: 0 }],
  incompleteList: [{ name: '', checked: false, isEdit: false, id: 0 }],
}

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  completeList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
  incompleteList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
}

export default Search
