import { FaEdit, FaTrash, FaRegSave } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import PropTypes from 'prop-types'

const Todo = ({
  id,
  name,
  checked,
  isEdit,
  list,
  completeList,
  setCompleteList,
  incompleteList,
  setIncompleteList,
  editText,
  setEditText,
}) => {
  const deleteHandler = () => {
    const newList = list.filter((item) => item.id !== id)
    const findIdFromIncompleteList = incompleteList.find(
      (item) => item.id === id
    )

    if (findIdFromIncompleteList) setIncompleteList([...newList])
    else setCompleteList([...newList])
  }

  const checkHandler = () => {
    for (let i in list) {
      if (list[i].id === id) {
        list[i].checked = !list[i].checked
        if (list[i].checked) setCompleteList([...completeList, list[i]])
        else setIncompleteList([...incompleteList, list[i]])
        list.splice(i, 1)
        break
      }
    }
  }

  const editTextHandler = (e) => {
    setEditText(e.target.value)
  }

  const editHandler = () => {
    setEditText(name)
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isEdit: !item.isEdit,
        }
      }
      return { ...item, isEdit: false }
    })

    const findIdFromIncompleteList = incompleteList.find(
      (item) => item.id === id
    )

    if (findIdFromIncompleteList) {
      setIncompleteList([...newList])
      setCompleteList(
        completeList.map((item) => {
          return { ...item, isEdit: false }
        })
      )
    } else {
      setCompleteList([...newList])
      setIncompleteList(
        incompleteList.map((item) => {
          return { ...item, isEdit: false }
        })
      )
    }
  }

  const saveHandler = () => {
    if (editText === '') console.log('Field is empty')
    else {
      const newList = list.map((item) => {
        if (item.id === id) {
          return { ...item, name: editText, isEdit: false }
        }
        return item
      })

      const findIdFromIncompleteList = incompleteList.find(
        (item) => item.id === id
      )

      if (findIdFromIncompleteList) setIncompleteList([...newList])
      else setCompleteList([...newList])

      setEditText('')
    }
  }

  const cancelHandler = () => {
    setEditText('')

    const newList = list.map((item) => {
      return { ...item, isEdit: false }
    })

    const findIdFromIncompleteList = incompleteList.find(
      (item) => item.id === id
    )

    if (findIdFromIncompleteList) setIncompleteList([...newList])
    else setCompleteList([...newList])
  }

  return (
    <li>
      <div>
        {isEdit ? (
          <div className='list-field'>
            <input
              type='text'
              className='todo-name-edit'
              value={editText}
              onChange={editTextHandler}
            />
            <FaRegSave className='save-icon' onClick={saveHandler} />
            <ImCancelCircle className='cancel-icon' onClick={cancelHandler} />
          </div>
        ) : (
          <div className={`todo-name ${checked ? 'todo-completed' : ''}`}>
            {name}
          </div>
        )}
      </div>
      <div className='list-icons'>
        {checked ? (
          <input
            type='checkbox'
            className={`complete-input ${isEdit ? 'complete-input-edit' : ''}`}
            onChange={checkHandler}
            checked
          />
        ) : (
          <input
            type='checkbox'
            className={`complete-input ${isEdit ? 'complete-input-edit' : ''}`}
            onChange={checkHandler}
          />
        )}
        <FaEdit className='edit-icon' onClick={editHandler} />
        <FaTrash className='trash-icon' onClick={deleteHandler} />
      </div>
    </li>
  )
}

Todo.defaultProps = {
  id: null,
  name: '',
  checked: false,
  isEdit: false,
  list: [{ name: '', checked: false, isEdit: false, id: null }],
  completeList: [{ name: '', checked: false, isEdit: false, id: null }],
  setCompleteList: () => {},
  incompleteList: [{ name: '', checked: false, isEdit: false, id: null }],
  setIncompleteList: () => {},
  editText: '',
  setEditText: () => {},
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
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
}

export default Todo
