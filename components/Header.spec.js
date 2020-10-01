import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

import Header from './Header';

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue
    });
  })

  it('should render <Header/> without crashing', () => {
    expect(wrapper.element).toMatchSnapshot();
  })
})
