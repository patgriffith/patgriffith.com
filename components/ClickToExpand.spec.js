import { shallowMount } from '@vue/test-utils';
import ClickToExpand from './ClickToExpand';

describe('<ClickToExpand />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ClickToExpand);
  })

  it('should render <ClickToExpand/> without crashing', () => {
    expect(wrapper.element).toMatchSnapshot();
  })
})
