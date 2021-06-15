import { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Search from './components/Search'
import './App.css'

function App() {
  const [incompleteList, setIncompleteList] = useState([])
  const [completeList, setCompleteList] = useState([])
  const [text, setText] = useState('')
  const [editText, setEditText] = useState()
  const [searchText, setSearchText] = useState('')

  return (
    <div className='container' data-test='component-app'>
      <header>
        <h1>To-Do App</h1>
      </header>
      <main>
        <Form
          text={text}
          setText={setText}
          incompleteList={incompleteList}
          setIncompleteList={setIncompleteList}
        />
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          completeList={completeList}
          incompleteList={incompleteList}
        />
        <TodoList
          list={incompleteList}
          title={'Incomplete List'}
          completeList={completeList}
          setCompleteList={setCompleteList}
          incompleteList={incompleteList}
          setIncompleteList={setIncompleteList}
          editText={editText}
          setEditText={setEditText}
          searchText={searchText}
        />
        <TodoList
          list={completeList}
          title={'Complete List'}
          completeList={completeList}
          setCompleteList={setCompleteList}
          incompleteList={incompleteList}
          setIncompleteList={setIncompleteList}
          editText={editText}
          setEditText={setEditText}
          searchText={searchText}
        />
      </main>
    </div>
  )
}

export default App

// const [incompleteSearchText, setIncompleteSearchText] = useState('')
// const [completeSearchText, setCompleteSearchText] = useState('')

// incompleteSearchText = { incompleteSearchText }
// setIncompleteSearchText = { setIncompleteSearchText }
// completeSearchText = { completeSearchText }
// setCompleteSearchText = { setCompleteSearchText }

// incompleteSearchText = { incompleteSearchText }
// setIncompleteSearchText = { setIncompleteSearchText }
// completeSearchText = { completeSearchText }
// setCompleteSearchText = { setCompleteSearchText }

// incompleteSearchText,
// setIncompleteSearchText,
// completeSearchText,
// setCompleteSearchText,
