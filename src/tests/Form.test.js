import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Form from '../components/Form'

Enzyme.configure({ adapter: new Adapter() })

test('Form receives text prop correctly', () => {
  const wrapper = mount(<Form text={'ab'} />)
  expect(wrapper.find('input').props().value).toEqual('ab')
})

const list = [{ name: 'name', checked: false, isEdit: false, id: 0 }]
test('Form receives incompleteList prop correctly', () => {
  const wrapper = mount(<Form incompleteList={list} />)
  expect(wrapper.props().incompleteList).toEqual(list)
}) // doesn't work with react 17

test('Form calls setText prop on input onChange event', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<Form setText={mockfn} />)
  wrapper.find('input').simulate('change', { target: { value: 'ab' } })
  expect(mockfn).toHaveBeenCalledWith('ab')
})

test('Form calls setText prop on cross icon onClick event', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<Form setText={mockfn} />)
  wrapper.find('ImCross').simulate('click')
  expect(mockfn).toHaveBeenCalledWith('')
})

test('Form calls setIncompleteList prop on add button onClick event', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<Form text={'mock'} setIncompleteList={mockfn} />)
  wrapper.find('button').simulate('click')
  expect(mockfn).toHaveBeenCalled()
})

// test('Form calls setText prop on add button onClick event', () => {
//   const mockfn = jest.fn()
//   const wrapper = mount(<Form setText={mockfn} />)
//   wrapper.find('button').simulate('click')
//   expect(mockfn.mock.calls.length).toEqual(1)
// })
