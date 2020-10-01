import { shallowMount } from '@vue/test-utils';
import HomeSection from './HomeSection';

describe('<HomeSection />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeSection, {propsData: {
      data: {
        slug: ''
      }
    }});
  })

  it('should render <HomeSection/> without crashing', () => {
    wrapper.setProps({
     data: {
       title: 'TEST_TITLE',
       intro: 'TEST_INTRO',
       outro: 'TEST_OUTRO'
     }
    })
    expect(wrapper.element).toMatchSnapshot();
  })

  it('should render expandable sections', () => {

    wrapper.setProps({
      data: {
        expands: ['TEST_SECTION_1', 'TEST_SECTION_2']
      }
     })
     expect(wrapper.element).toMatchSnapshot();
  })

})
