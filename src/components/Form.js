import PropTypes from 'prop-types'
import { ImCross } from 'react-icons/im'

const Form = ({ text, setText, incompleteList, setIncompleteList }) => {
  const textHandler = (e) => {
    setText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    if (text === '') console.log('Field is empty')
    else {
      setIncompleteList([
        ...incompleteList,
        { name: text, checked: false, isEdit: false, id: Math.random() * 1000 },
      ])
      setText('')
    }
  }

  const resetHandler = () => {
    setText('')
  }

  return (
    <form action='' autoComplete='off'>
      <div className='input-container'>
        <input
          type='text'
          value={text}
          className='form-input'
          placeholder='add a todo'
          onChange={textHandler}
        />
        <ImCross className='cross' onClick={resetHandler} />
      </div>
      <button type='submit' className='todo-button' onClick={submitTodoHandler}>
        add
      </button>
    </form>
  )
}

Form.defaultProps = {
  text: '',
  setText: () => {},
  incompleteList: [{ name: '', checked: false, isEdit: false, id: null }],
  setIncompleteList: () => {},
}

Form.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  incompleteList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      isEdit: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
  setIncompleteList: PropTypes.func.isRequired,
}

export default Form
