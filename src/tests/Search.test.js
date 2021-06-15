import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from '../components/Search'

Enzyme.configure({ adapter: new Adapter() })

test('Search receives searchText prop correctly', () => {
  const wrapper = mount(<Search searchText={'value'} />)
  expect(wrapper.find('input').props().value).toEqual('value')
})

test('Search calls setSearchText prop on input onChange event', () => {
  const mockfn = jest.fn()
  const wrapper = mount(<Search setSearchText={mockfn} />)
  wrapper.find('input').simulate('change', { target: { value: 'ab' } })
  expect(mockfn).toHaveBeenCalledWith('ab')
})

const list = [{ name: 'name', checked: false, isEdit: false, id: 0 }]

test('Search receives completeList prop correctly', () => {
  const wrapper = mount(<Search completeList={list} />)
  expect(wrapper.props().completeList).toEqual(list)
})

test('Search receives incompleteList prop correctly', () => {
  const wrapper = mount(<Search incompleteList={list} />)
  expect(wrapper.props().incompleteList).toEqual(list)
})
