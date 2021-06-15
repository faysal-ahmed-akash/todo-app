import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoList from '../components/TodoList'

Enzyme.configure({ adapter: new Adapter() })

const mockList = [{ name: 'name', checked: false, isEdit: false, id: 0 }]
test('TodoList receives list prop correctly', () => {
  const wrapper = mount(<TodoList list={mockList} />)
  expect(wrapper.find('Todo').props().list).toEqual(mockList)
})

test('TodoList receives title prop correctly', () => {
  const wrapper = mount(<TodoList list={mockList} title={'ab'} />)
  expect(wrapper.find('p').text()).toEqual('ab')
})

test('TodoList receives completeList prop correctly', () => {
  const wrapper = mount(<TodoList completeList={mockList} />)
  expect(wrapper.find('Todo').props().completeList).toEqual(mockList)
})

test('TodoList receives setCompleteList prop correctly', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<TodoList setCompleteList={mockfn} />)
  expect(wrapper.find('Todo').props().setCompleteList).toEqual(mockfn)
})

test('TodoList receives incompleteList prop correctly', () => {
  const wrapper = mount(<TodoList incompleteList={mockList} />)
  expect(wrapper.find('Todo').props().incompleteList).toEqual(mockList)
})

test('TodoList receives setIncompleteList prop correctly', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<TodoList setIncompleteList={mockfn} />)
  expect(wrapper.find('Todo').props().setIncompleteList).toEqual(mockfn)
})

test('TodoList receives completeList prop correctly', () => {
  const wrapper = mount(<TodoList editText={'ab'} />)
  expect(wrapper.find('Todo').props().editText).toEqual('ab')
})
