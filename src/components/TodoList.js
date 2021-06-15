import Todo from './Todo'
import PropTypes from 'prop-types'

const TodoList = ({
  list,
  title,
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
  editText,
  setEditText,
  searchText,
}) => {
  return (
    <div>
      {list.length > 0 ? <p className='list-title'>{title}</p> : ''}
      <ul
        className={`${
          list.length > 0 ? 'list-container' : 'list-container-empty'
        }`}
      >
        {list
          .filter(
            (item) =>
              searchText === '' ||
              item.name.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              checked={todo.checked}
              isEdit={todo.isEdit}
              list={list}
              completeList={completeList}
              setCompleteList={setCompleteList}
              incompleteList={incompleteList}
              setIncompleteList={setIncompleteList}
              editText={editText}
              setEditText={setEditText}
            />
          ))}
      </ul>
    </div>
  )
}

TodoList.defaultProps = {
  list: [{ name: '', checked: false, isEdit: false, id: null }],
  title: '',
  completeList: [{ name: '', checked: false, isEdit: false, id: null }],
  setCompleteList: () => {},
  incompleteList: [{ name: '', checked: false, isEdit: false, id: null }],
  setIncompleteList: () => {},
  editText: '',
  setEditText: () => {},
  searchText: '',
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  completeList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
  setCompleteList: PropTypes.func.isRequired,
  incompleteList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
  setIncompleteList: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}

export default TodoList
