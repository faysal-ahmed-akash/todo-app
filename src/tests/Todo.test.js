import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Todo from '../components/Todo'

Enzyme.configure({ adapter: new Adapter() })

test('Todo receives name prop correctly', () => {
  const wrapper = mount(<Todo isEdit={false} name={'ab'} />)
  expect(wrapper.find('#todo-name').text()).toBe('ab')
})

test('Todo receives cheked prop correctly', () => {
  const wrapper = mount(<Todo checked={false} />)
  expect(wrapper.find('#todo-name').hasClass('todo-name'))
})

test('Todo receives isEdit prop correctly', () => {
  const wrapper = mount(<Todo checked={true} isEdit={false} />)
  expect(wrapper.find('.list-icons input').hasClass('complete-input'))
})

test('Todo receives editText prop correctly', () => {
  const wrapper = mount(<Todo isEdit={true} editText={'ab'} />)
  expect(wrapper.find('.todo-name-edit').props().value).toEqual('ab')
})

test('Todo calls setEditText prop on input onChange event', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<Todo isEdit={true} setEditText={mockfn} />)
  wrapper
    .find('.todo-name-edit')
    .simulate('change', { target: { value: 'ab' } })
  expect(mockfn).toHaveBeenCalledWith('ab')
})

test('Todo calls setCompleteList prop on clicking the delete icon', () => {
  const mocklist = [{ name: '', checked: false, isEdit: false, id: 0 }]
  const mockfn = jest.fn()
  const wrapper = mount(
    <Todo incompleteList={mocklist} id={-1} setCompleteList={mockfn} />
  )
  wrapper.find('FaTrash').simulate('click')
  expect(mockfn).toHaveBeenCalledWith([...mocklist])
})

test('Todo calls setIncompleteList prop on clicking the delete icon', () => {
  const mocklist = [{ name: '', checked: false, isEdit: false, id: 0 }]
  const list = [{ name: '', checked: false, isEdit: false, id: -1 }]
  const mockfn = jest.fn()
  const wrapper = mount(
    <Todo
      list={list}
      incompleteList={mocklist}
      id={0}
      setIncompleteList={mockfn}
    />
  )
  wrapper.find('FaTrash').simulate('click')
  expect(mockfn).toHaveBeenCalledWith([...list])
})
